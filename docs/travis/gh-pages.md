## Github Pages

代码提交到 github 仓库时，自动将最新的代码部署到 gh-pages 中

## 生成 github tocken

按照[创建 Token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line)创建一个 Token ，Travis 部署中将使用到

## 创建 `.travis.yml`

在要部署的项目的根路径中创建 `.travis.yml`

```yaml
language: node_js
node_js: stable
branches:
  only:
    - master
install:
  - yarn install
script:
  - yarn run docs:build
deploy:
  provider: pages
  skip-cleanup: true
  github-token: $GITHUB_TOKEN
  keep-history: true
  local_dir: docs/.vuepress/dist
  on:
    branch: master
```

## 更多配置
- `local_dir`: Directory to push to GitHub Pages, defaults to current directory. Can be specified as an absolute path or a relative path from the current directory.
- `repo`: Repo slug, defaults to current repo.
- `target_branch`: Branch to (force, see: keep_history) push local_dir contents to, defaults to gh-pages.
- `keep_history`: Optional, create incremental commit instead of doing push force, defaults to false.
- `fqdn`: Optional, sets a custom domain for your website, defaults to no custom domain support.
- `project_name`: Defaults to value of fqdn or repo slug, used for metadata.
- `email`: Optional, committer info, defaults to deploy@travis-ci.org.
- `name`: Optional, committer, defaults to Deployment Bot.
- `committer_from_gh`: Optional, defaults to false. Allows you to use the token’s owner name and email for commit. Overrides email and name options.
- `allow_empty`_commit: Optional, defaults to false. Enabled if only keep_history is true.
- `github_url`: Optional, the URL of the self-hosted GitHub enterprise, defaults to github.com.
- `verbose`: Optional, be verbose about internal steps, defaults to false.
- `deployment_file`: Optional, defaults to false, enables creation of deployment-info files.