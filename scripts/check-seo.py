"""SEO checks for the built site: run after `npm run build`."""
import os, re, json, html, sys
issues = []; titles = {}; descs = {}; pages = 0
for root, _, files in os.walk('dist'):
    for f in files:
        if not f.endswith('.html'): continue
        path = os.path.join(root, f); s = open(path).read(); pages += 1
        if '404' in f or f.startswith('google'): continue
        t = html.unescape(re.search(r'<title>(.*?)</title>', s).group(1))
        d = html.unescape(re.search(r'<meta name="description" content="(.*?)"', s).group(1))
        if len(t) > 62: issues.append(f'{path}: title {len(t)} chars: {t}')
        if not 50 <= len(d) <= 165: issues.append(f'{path}: description {len(d)} chars')
        titles.setdefault(t, []).append(path); descs.setdefault(d, []).append(path)
        h1 = re.findall(r'<h1[\s>]', s)
        if len(h1) != 1: issues.append(f'{path}: {len(h1)} h1 tags')
        levels = [int(x) for x in re.findall(r'<h([1-6])[\s>]', s)]
        for a, b in zip(levels, levels[1:]):
            if b > a + 1: issues.append(f'{path}: heading jumps h{a}->h{b}'); break
        for blk in re.findall(r'<script type="application/ld\+json">(.*?)</script>', s, re.S):
            try:
                g = json.loads(blk)['@graph']
                for node in g:
                    if node.get('@type') == 'FAQPage':
                        for q in node['mainEntity']:
                            if html.escape(q['name']) not in s and q['name'] not in s: issues.append(f'{path}: FAQ question not visible: {q["name"]}')
            except Exception as e: issues.append(f'{path}: bad JSON-LD {e}')
        if 'rel="canonical"' not in s: issues.append(f'{path}: no canonical')
for t, ps in titles.items():
    if len(ps) > 1: issues.append(f'duplicate title "{t}" on {len(ps)} pages')
for d, ps in descs.items():
    if len(ps) > 1: issues.append(f'duplicate description on {ps}')
# sitemap: valid XML, every prompt/blog/static page listed, every URL exists
import xml.etree.ElementTree as ET
try:
    ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
    locs = [u.find('s:loc', ns).text for u in ET.parse('dist/sitemap.xml').getroot()]
    base = locs[0].rstrip('/')
    for l in locs:
        f = 'dist' + l[len(base):] + ('index.html' if l.endswith('/') else '')
        if not os.path.exists(f): issues.append(f'sitemap URL has no page: {l}')
    for root, _, files in os.walk('dist'):
        if 'index.html' in files and '/page/' not in root + '/':
            u = base + root[4:] + '/'
            if u not in locs: issues.append(f'page missing from sitemap: {u}')
    if len(locs) != len(set(locs)): issues.append('duplicate URLs in sitemap')
except Exception as e:
    issues.append(f'sitemap error: {e}')
print(f'{pages} pages checked, {len(issues)} issues')
for i in issues: print(' -', i)
sys.exit(1 if issues else 0)
