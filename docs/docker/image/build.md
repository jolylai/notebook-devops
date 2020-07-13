---
title: 镜像构建
order: 2
---

## commit 镜像

docker commit 只提交容器镜像发生变更的部分，即修改的后的容器镜像与当前仓库中对应镜像之间的差异部分

```shell
docker build github.com/creack/docker-firefox
```

调用 git clone
