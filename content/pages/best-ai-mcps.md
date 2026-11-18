---
title: "Best MCP Servers: What They Are and Which to Try"
h1: Best MCP servers to connect AI to your tools
description: What the Model Context Protocol (MCP) is, how MCP servers connect Claude, ChatGPT and other assistants to your apps, and popular MCP servers to try.
updated: 2026-11-18
schemaType: CollectionPage
faq:
  - q: "What is an MCP server?"
    a: "An MCP server is a small program that gives an AI assistant access to a specific tool or data source — such as files, a database, GitHub or a browser — through the Model Context Protocol, an open standard."
  - q: "Which AI assistants support MCP?"
    a: "Claude was the first major assistant to support MCP, and support has since spread to other assistants and coding tools. Check your tool's documentation for how to add MCP servers."
  - q: "Are MCP servers safe?"
    a: "They can be, but each server can read or change data in the tools it connects to. Use servers from sources you trust, give them the minimum access they need, and review what the AI wants to do before you approve actions."
---

The **Model Context Protocol (MCP)** is an open standard, introduced by Anthropic, that lets AI assistants connect to tools and data in a consistent way. An **MCP server** is the connector: one server might give the AI access to your files, another to GitHub, another to a web browser.

Without MCP, an assistant only knows what you paste into the chat. With the right servers, it can look things up, read documents and take actions in your tools — with your approval.

## How MCP works in practice

1. **You add an MCP server** to an app that supports MCP (for example Claude, an AI code editor or an agent framework).
2. **The assistant sees new tools,** such as "search issues" or "read file".
3. **When a task needs one,** the assistant asks to use it and you approve.

The official site, [modelcontextprotocol.io](https://modelcontextprotocol.io), has the specification and setup guides, and the [MCP servers repository](https://github.com/modelcontextprotocol/servers) lists reference servers and many community servers.

## Reference servers to learn with

These come from the official MCP project and are a good way to see how MCP works:

| Server | What it lets the AI do |
|---|---|
| **Filesystem** | Read and write files in folders you allow |
| **Fetch** | Download a web page and convert it to text |
| **Git** | Read history, diffs and branches of a local repository |
| **Memory** | Keep a simple knowledge graph between conversations |
| **Time** | Get the current time and convert time zones |

## Popular servers from tool makers

Many companies publish official MCP servers for their products. Common examples include servers for **GitHub** (issues, pull requests, code search), **Notion**, **Figma**, **Sentry**, **Stripe**, **Cloudflare**, **Supabase**, **Linear** and **Atlassian** (Jira, Confluence), and **Playwright** for browser automation. Look for the official server in each company's documentation, rather than an unofficial copy.

## Which MCP servers to start with

- **For writing and research:** Fetch and a notes app server (such as Notion) so the assistant can read sources and your notes.
- **For developers:** GitHub, Git and Filesystem, plus Playwright for testing web pages.
- **For teams:** the servers for the project and documentation tools you already use (Linear, Jira, Confluence, Notion).

## Safety checklist

- **Install from trusted sources** — the official repository or the tool maker's documentation.
- **Give the least access needed.** Limit folders, use read-only tokens where possible.
- **Review actions before approving,** especially anything that sends, deletes or pays.
- **Watch for instructions inside data.** A web page or document can contain text that tries to steer the AI; don't let the assistant act on it blindly.

Want prompts to use with your connected assistant? Browse our [Claude prompts](/claude-prompts/) or build one with the [prompt generator](/prompt-generator/).
