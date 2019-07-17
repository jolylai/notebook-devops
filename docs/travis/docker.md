# Docker

## 登录 docker hub

```bash
# 登录docker hub
$ docker login -u "$REGISTRY_USER" -p "$REGISTRY_PASS"

# 生成镜像
$ docker build --tag jolylai/notebook .

# 推送镜像到 docker hub
$ docker push jolylai/notebook
```

```yml
language: node_js
node_js: stable
sudo: required
services:
  - docker
branches:
  only:
    - master
cache:
  directories: node_modules
before_install:
  - openssl aes-256-cbc -K $encrypted_5fcb8b10af91_key -iv $encrypted_5fcb8b10af91_iv
    -in id_rsa.enc -out ~/.ssh/id_rsa -d
install:
  - yarn install
script:
  - yarn run docs:build
  - docker build --tag jolylai/notebook .
before_deploy:
  - docker login -u "$REGISTRY_USER" -p "$REGISTRY_PASS"
deploy:
  provider: script
  script: docker push jolylai/notebook
  on:
    branch: master
after_script:
  - docker images
after_success:
  - chmod 600 ~/.ssh/id_rsa
  - ssh root@106.12.140.131 -o StrictHostKeyChecking=no 'docker pull jolylai/notebook && docker run -d -p 80:80'
```
