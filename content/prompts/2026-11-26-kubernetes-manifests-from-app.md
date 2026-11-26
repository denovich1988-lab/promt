---
title: Kubernetes manifests from your app requirements
date: 2026-11-26
category: coding
description: Generate production-ready Kubernetes YAML for your app, with Deployment, Service, Ingress, ConfigMap, probes, resource limits and security settings explained.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [kubernetes, yaml, devops, deployment]
---

Kubernetes YAML is verbose, and small omissions such as missing probes or resource limits cause outages later. This prompt turns a description of your application into a complete set of Kubernetes manifests with sensible production defaults: health checks, resource requests, security context, config and secrets handling, and an explanation of every choice so you can review it with confidence.

## Prompt

```prompt
Act as a senior platform engineer. Write Kubernetes manifests for my application.

App: [NAME, LANGUAGE/FRAMEWORK, WHAT IT DOES]
Container image: [REGISTRY/IMAGE:TAG]
Port and health endpoints: [E.G. 8080, /healthz, /ready]
Environment variables (mark secrets): [LIST]
Expected traffic and replicas: [E.G. 3 REPLICAS, SPIKES AT NOON]
Resources per pod (if known): [CPU/MEMORY OR "SUGGEST"]
Exposure: [INTERNAL ONLY / PUBLIC VIA INGRESS, DOMAIN, TLS]
Cluster details: [E.G. EKS/GKE/AKS/K3S, INGRESS CONTROLLER, NAMESPACE]
Storage needs: [NONE / PERSISTENT VOLUME SIZE]

Create:
1. Namespace, Deployment (with rolling update strategy, liveness/readiness/startup probes, resource requests and limits, securityContext running as non-root with read-only root filesystem where possible), Service, Ingress with TLS, ConfigMap and a Secret template with placeholder values.
2. HorizontalPodAutoscaler and PodDisruptionBudget if replicas > 1.
3. Labels and annotations following recommended Kubernetes conventions.
4. Comments in the YAML explaining non-obvious settings.
5. kubectl commands to apply, verify and roll back.
6. A review checklist of things I must adjust for my cluster.

Never put real secret values in YAML; use placeholders. State assumptions where my input is missing.
```

## How to use it

1. **Fill in real health endpoints**; probes pointed at the wrong path will restart healthy pods.
2. **Apply to a staging namespace first** and watch `kubectl get events`.
3. **Tune resources** after a few days of real metrics.

## Tips

- Store secrets in a secret manager or sealed secrets rather than plain Kubernetes Secrets in git.
- Run a manifest linter in CI to catch issues before deploys.
