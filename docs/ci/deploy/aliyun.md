---
title: 阿里云
---

创建 `.github/workflows/deploy.yml`

```yml
name: Hexo build and deploy

on:
  push:
    branches: [dev]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2 # If you're using actions/checkout@v2 you must set persist-credentials to false in most cases for the deployment to work correctly.
        with:
          persist-credentials: false
          # checkout到你的hexo代码分支
          ref: dev
          # hexo需要加载内部子模块
          submodules: true
      - name: Install and Build
        run: |
          npm install
          npm run build
      - name: Deploy to aliyun server
        uses: easingthemes/ssh-deploy@v2.0.7
        env:
          SSH_PRIVATE_KEY: ${{ secrets.ALIYUN_SERVER_ACCESS_TOKEN }}
          ARGS: '-avz --delete'
          SOURCE: 'public'
          REMOTE_HOST: ${{ secrets.ALIYUN_SERVER_HOST }}
          REMOTE_USER: 'root'
          TARGET: '/root/dist/'
```