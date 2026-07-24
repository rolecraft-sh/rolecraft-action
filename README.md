<p align="center">
  <img src="https://github.com/rolecraft-sh/rolecraft/raw/main/assets/rolecraft_logo.png" width="120" height="120" alt="RoleCraft">
</p>

<h1 align="center">rolecraft-action</h1>

<p align="center">
  <a href="https://github.com/rolecraft-sh/rolecraft-action/actions"><img src="https://github.com/rolecraft-sh/rolecraft-action/actions/workflows/test.yml/badge.svg" alt="Test"></a>
  <a href="https://github.com/marketplace/actions/rolecraft-action"><img src="https://img.shields.io/badge/GitHub-Marketplace-blue?logo=github" alt="Marketplace"></a>
  <a href="https://github.com/rolecraft-sh/rolecraft"><img src="https://img.shields.io/badge/powered%20by-rolecraft-2ea44f" alt="Powered by rolecraft"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-green" alt="MIT"></a>
</p>

<p align="center">
  Install, verify, and manage <a href="https://github.com/rolecraft-sh/rolecraft">rolecraft</a> AI agent skills — directly in your GitHub Actions CI/CD pipelines.
</p>

---

## Usage

Minimal setup for a project that uses rolecraft:

```yaml
steps:
  - uses: actions/checkout@v4
  - uses: actions/setup-node@v4
    with:
      node-version: 20
  - uses: rolecraft-sh/rolecraft-action@v1
    with:
      command: ci --yes
```

This installs `rolecraft` from npm and runs `rolecraft ci --yes` — which resolves your lockfile and installs all pinned skills.

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `command` | ✅ | — | RoleCraft command to run (e.g. `ci --yes`, `verify`, `doctor`, `install user/repo --dry-run`) |
| `version` | ❌ | `latest` | RoleCraft version to install (`latest`, `1.6.0`, `2.0.0`, etc.) |

## Examples

### Verify skill integrity

Fail the build if any installed skill has been tampered with or has hash mismatches:

```yaml
- uses: rolecraft-sh/rolecraft-action@v1
  with:
    command: verify
```

### Pin a specific rolecraft version

```yaml
- uses: rolecraft-sh/rolecraft-action@v1
  with:
    command: ci --yes
    version: 2.0.0
```

### Dry-run install a skill from GitHub

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

### Install skills and run CI in one workflow

```yaml
name: Deploy
on: [push]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - uses: rolecraft-sh/rolecraft-action@v1
        with:
          command: install my-org/my-skill --yes
      - uses: rolecraft-sh/rolecraft-action@v1
        with:
          command: ci --yes
      - run: npm run build
```

### Check for outdated skills

```yaml
- uses: rolecraft-sh/rolecraft-action@v1
  with:
    command: check
```

## All commands

Any rolecraft CLI command works. Here are the most useful ones for CI:

| Command | Purpose |
|---------|---------|
| `ci --yes` | Install all skills from lockfile (deterministic install) |
| `verify` | Check that installed skills match their content hashes |
| `check` | Check for available updates to installed skills |
| `doctor` | Run system health check |
| `install <source> --yes` | Install a skill inline |
| `install <source> --dry-run` | Preview what would be installed |

See the [rolecraft CLI reference](https://github.com/rolecraft-sh/rolecraft) for the full list of commands.

## Development

```bash
# Test locally (requires rolecraft installed)
node index.js
```

## Related

- [rolecraft](https://github.com/rolecraft-sh/rolecraft) — the CLI that powers this action
- [rolecraft Registry](https://github.com/rolecraft-sh/registry) — central skill marketplace

## License

MIT
