<p align="center">
  <img src="https://github.com/rolecraft-sh/rolecraft/raw/main/assets/rolecraft_logo.png" width="120" height="120" alt="RoleCraft">
</p>

<h1 align="center">rolecraft-action</h1>

[![Test](https://github.com/rolecraft-sh/rolecraft-action/actions/workflows/test.yml/badge.svg)](https://github.com/rolecraft-sh/rolecraft-action/actions) [![Marketplace](https://img.shields.io/badge/GitHub-Marketplace-blue?logo=github)](https://github.com/marketplace/actions/rolecraft-action) [![Powered by rolecraft](https://img.shields.io/badge/powered%20by-rolecraft-2ea44f)](https://github.com/rolecraft-sh/rolecraft) [![MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)

<p align="center">
  Install and verify AI agent skills in CI with <a href="https://github.com/rolecraft-sh/rolecraft">rolecraft</a>.
</p>

---

## Usage

```yaml
name: Verify skills
on: [push]
jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - uses: rolecraft-sh/rolecraft-action@v1
        with:
          command: ci --yes
```

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `command` | ✅ | — | RoleCraft command to run |
| `version` | ❌ | `latest` | RoleCraft version to install (`latest`, `1.6.0`, etc.) |

## Examples

### Verify skill integrity

```yaml
- uses: rolecraft-sh/rolecraft-action@v1
  with:
    command: verify
```

### Dry-run install a skill

```yaml
- uses: rolecraft-sh/rolecraft-action@v1
  with:
    command: install user/repo --dry-run
```

### Run system health check

```yaml
- uses: rolecraft-sh/rolecraft-action@v1
  with:
    command: doctor
```

### Specific version

```yaml
- uses: rolecraft-sh/rolecraft-action@v1
  with:
    command: ci --yes
    version: 1.6.0
```

## Development

```bash
# Test locally
node index.js
```

## Related

- [rolecraft](https://github.com/rolecraft-sh/rolecraft) — the CLI that powers this action

## License

MIT
