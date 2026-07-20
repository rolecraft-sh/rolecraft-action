# rolecraft-action

GitHub Action for [rolecraft](https://github.com/sametcelikbicak/rolecraft) — install and verify AI agent skills in CI.

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
      - uses: sametcelikbicak/rolecraft-action@v1
        with:
          command: ci --yes
```

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `command` | ✅ | — | RoleCraft command to run |
| `version` | ❌ | `latest` | RoleCraft version to install |

## Examples

```yaml
# Verify skill integrity
- uses: sametcelikbicak/rolecraft-action@v1
  with:
    command: verify

# Dry-run install a skill
- uses: sametcelikbicak/rolecraft-action@v1
  with:
    command: install user/repo --dry-run

# Run system health check
- uses: sametcelikbicak/rolecraft-action@v1
  with:
    command: doctor
```

## License

MIT
