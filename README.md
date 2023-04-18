# gh-configs

Common configurations for some GitHub Actions I'm using in multiple projects:

- [.markdownlinkcheck.json](.markdownlinkcheck.json): configurations for the [github-action-markdown-link-check](https://github.com/gaurav-nelson/github-action-markdown-link-check) GitHub Action.
- [.markdownlint.json](.markdownlint.json): configurations for the [markdownlint-cli2-action](https://github.com/DavidAnson/markdownlint-cli2-action) GitHub Actions.

It prevents me from having to update all repositories when I change something that should apply to all my repositorires (i.e: add a link pattern to ignore when linting Markdown links or enforce a specific rule for Markdown linting).

> I could have sync the files to other repositories when modified versions are pushed to this one, but I want to prevent modifying the configurations directly in a specific repository by mistake, or having an external contributor submitting a change.

## How to use

In the GitHub Actions using one of the configuration file, I'm using the [wget](https://github.com/wei/wget) GitHub Action as a step to download the configuration file as follow:

```yaml
- name: Download .markdownlint.json
  uses: wei/wget@v1
  with:
    args: https://raw.githubusercontent.com/fharper/gh-configs/main/.markdownlint.json
```
