# 概览

## 生命周期

- OPTIONAL Install `apt addons`
- OPTIONAL Install `cache components`
- `before_install`
- `install`
- `before_script`
- `script`
- OPTIONAL `before_cache` (for cleaning up cache)
- `after_success` or `after_failure`
- OPTIONAL `before_deploy`
- OPTIONAL `deploy`
- OPTIONAL `after_deploy`
- `after_script`

## 常用配置

### 添加授信主机

部署项目到自己服务器的时候需要添加

```yaml
addons:
  ssh_known_hosts: 106.12.140
```

### 部署到 gh-pages

```yaml
deploy:
  provider: pages
  skip-cleanup: true
  github-token: "$GITHUB_TOKEN"
  keep-history: true
  local_dir: docs/.vuepress/dist
  on:
    branch: master
```

### 缓存

```yaml
cache:
  directories: node_modules
```

### 文件压缩并上传至服务器

使用了一下，经常遇到 scp 很或者失败的问题

```yaml
after_deploy:
  - cd public/
  - zip -r dist.zip .
  - chmod 600 ~/.ssh/id_rsa
  - ssh root@"$HOST" -o StrictHostKeyChecking=no 'rm -rf /var/www/happy-little-stack/ && mkdir /var/www/happy-little-stack/'
  - scp -o stricthostkeychecking=no -r dist.zip root@"$HOST":/var/www/happy-little-stack/
  - ssh root@"$HOST" -o StrictHostKeyChecking=no 'unzip -o -d /var/www/happy-little-stack /var/www/happy-little-stack/dist.zip'
  - cd ..
  - yarn run notification
```

## 模板

```yaml
language: node_js
node_js: 8
cache:
  directories: node_modules
sudo: required
services:
  - docker
branches:
  only:
    - master
addons:
  ssh_known_hosts: 106.12.140
before_install:
  - openssl aes-256-cbc -K $encrypted_2a01126f8b17_key -iv $encrypted_2a01126f8b17_iv
    -in id_rsa.enc -out ~/.ssh/id_rsa -d
  - chmod 600 ~/.ssh/id_rsa
  - echo -e "Host $HOST\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
install:
  - yarn install
before_script:
  -
script:
  - yarn run docs:build
before_cache:
  -
after_success:
  - scp -o stricthostkeychecking=no -r docs/.vuepress/dist root@"$HOST":/root
after_failure:
  -
before_deploy:
  -
deploy:
  provider: pages
  skip-cleanup: true
  github-token: "$GITHUB_TOKEN"
  keep-history: true
  local_dir: docs/.vuepress/dist
  on:
    branch: master
after_deploy:
  - yarn run notification
  # 执行服务器上的命令
  - ssh root@"$HOST" -o StrictHostKeyChecking=no 'docker pull jolylai/notebook && docker run -d -p 80:80'
after_script: -
```
