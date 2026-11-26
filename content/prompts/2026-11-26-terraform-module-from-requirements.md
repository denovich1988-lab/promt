---
title: Terraform module prompt for infrastructure as code
date: 2026-11-26
category: coding
description: Generate a clean, reusable Terraform module from plain requirements, with variables, outputs, tagging, security defaults and a usage example.
models: [ChatGPT, Claude, Gemini]
level: Advanced
tags: [terraform, infrastructure as code, devops, cloud]
---

Writing Terraform from scratch means remembering resource arguments, wiring variables and outputs, and not forgetting security basics such as encryption and least-privilege access. This Terraform module prompt turns a plain-language description of the infrastructure you need into a structured, reusable module with sensible defaults, comments and a usage example, and points out what you should review before running `terraform apply`.

## Prompt

```prompt
Act as a senior DevOps engineer. Write a reusable Terraform module.

Cloud provider and region: [E.G. AWS EU-WEST-1 / GCP / AZURE]
Terraform and provider versions: [E.G. TERRAFORM >= 1.6, AWS PROVIDER ~> 5.0]
What the module should create: [E.G. A PRIVATE S3 BUCKET WITH VERSIONING AND LIFECYCLE RULES / A VPC WITH PUBLIC AND PRIVATE SUBNETS / A CONTAINER SERVICE BEHIND A LOAD BALANCER]
Environments: [DEV / STAGING / PROD DIFFERENCES]
Naming and tagging rules: [CONVENTIONS]
Security requirements: [ENCRYPTION, PUBLIC ACCESS, IAM, LOGGING]
State backend: [E.G. S3 + DYNAMODB LOCK / TERRAFORM CLOUD / NOT DECIDED]

Provide:
1. File structure (main.tf, variables.tf, outputs.tf, versions.tf, README.md).
2. Full code for each file with comments explaining non-obvious choices.
3. Variables with types, descriptions, validation rules and safe defaults; no hard-coded secrets.
4. Outputs other modules will need.
5. A root-module usage example for dev and prod.
6. Security defaults applied (encryption, blocked public access, least-privilege IAM) and anything I must decide myself.
7. Commands to run: init, fmt, validate, plan, and what to check in the plan output.
8. Rough cost drivers to watch.

Use only resources and arguments that exist in the stated provider version; if unsure about an argument, say so instead of guessing.
```

## How to use it

1. **Pin your provider version** in the prompt so the code matches your setup.
2. **Run `terraform validate` and `plan`** and read the plan carefully before applying.
3. **Test in a dev account first**, never straight in production.

## Tips

- Ask for a `tflint` or `checkov` configuration to catch issues automatically.
- Keep secrets in a secrets manager and reference them; never put them in variables files.
