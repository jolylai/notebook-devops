---
title: 阿里云
---

创建 `.github/workflows/deploy.yml`

```yml
name: Aliyun

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v2.1.0
        with:
          node-version: '12.x'

      - name: Cache dependencies
        uses: c-hive/gha-yarn-cache@v1

      - run: |
          yarn install --production
          yarn run build --prefix-paths

      - name: Deploy to aliyun server
        uses: easingthemes/ssh-deploy@v2.0.7
        env:
          SSH_PRIVATE_KEY: ${{ secrets.ALIYUN_SERVER_ACCESS_TOKEN }}
          ARGS: '-avz --delete'
          SOURCE: 'public/'
          REMOTE_HOST: ${{ secrets.ALIYUN_SERVER_HOST }}
          REMOTE_USER: 'root'
          TARGET: '/usr/share/nginx/html/HappyLittleStack/'
```
