---
title: 镜像
order: 2
---

## 创建镜像

### Dockerfile

[Dockerfile](https://docs.docker.com/engine/reference/builder/) 文件中支持的环境变量

- ADD
- COPY
- ENV
- EXPOSE
- FROM
- LABEL
- STOPSIGNAL
- USER
- VOLUME
- WORKDIR

```dockerfile
# pulls node.js docker image from docker hub
FROM node:8
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 8081
CMD node index.js
```

`docker build` 传入环境变量,如：`docker build --build-arg ENV_TAG=prod .`，如果有多个环境变量的话 `docker build --build-arg ENV_TAG=prod --build-arg ENV_TAG=prod .`

```dockerfile
# The ARG instruction defines a variable
# that users can pass at build-time to the builder with the
# `docker build` command using the --build-arg <varname>=<value> flag.
# docker build --build-arg ENV_TAG=prod .
ARG ENV_TAG
ENV ENV_TAG ${ENV_TAG}
```

[从 `Dockerfile` 文中创建镜像](https://docs.docker.com/engine/reference/commandline/build/)

```bash
# docker build [OPTIONS] PATH | URL | -
# docker build -t [imageName] [pathToFolder]
$ docker build -t hello-world .

# 如果没有传 tag 则默认为 latest
$ docker build -t hello-world:2 .
```

传入环境变量

```bash
$ docker build --build-arg ENV_TAG=prod .
# 多个环境变量
$ docker build --build-arg ENV_TAG=prod --build-arg HTTP=http://10:1234 .
```

常用的 Options

- **--tag, -t**: 镜像的名字及标签，通常 name:tag 或者 name 格式；可以在一次构建中为一个镜像设置多个标签。
- **--file , -f** :指定要使用的 Dockerfile 路径；
- **--build-arg=[]** :设置镜像创建时的变量；
- **--rm** :设置镜像成功后删除中间容器；

从 `container` 创建 `image`

```bash
$ docker commit [container] [imageName]
```

## tag

给 image 打 tag

```bash
$ docker tag [imageId] [imageName]
```

## docker images

> [查看镜像列表](https://docs.docker.com/engine/reference/commandline/images/)

```shell
# docker images [OPTIONS] [REPOSITORY[:TAG]]

# 列出最近创建的镜像
$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
nginx               1.15.2-alpine       36f3464a2197        22 months ago       18.6MB

# 列出所有的镜像（默认隐藏中间镜像）
$ docker images -a

# 只显示镜像 ID
$ docker images -q
f18518db91f5
2622e6cca7eb
ec365a2721d0

# 根据 镜像名称 和 tag 列出镜像
$ docker images node
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
node                8                   bd2f9f8fa54d        6 months ago        901MB

$ docker images node:8
```

显示格式

```bash
# 列出未加标签的镜像
$ docker images --filter "dangling=true"

# 列出镜像id全称
$ docker images --no-trunc

# 显示概要
$ docker images --digests
node                8                   sha256:472621a1c5ae598f1f6f128f8a1ed57dce7b369975523615265a0663b60a96b3   bd2f9f8fa54d        6 months ago        901MB
nginx               1.15.2-alpine       sha256:23e4dacbc60479fa7f23b3b8e18aad41bd8445706d0538b25ba1d575a6e2410b   36f3464a2197        23 months ago       18.6MB
```

格式化输出

```bash
$ docker images --format "{{.ID}}: {{.Repository}}"
bd2f9f8fa54d: node
36f3464a2197: nginx

$ docker images --format "table {{.ID}}\t{{.Repository}}\t{{.Tag}}"
bd2f9f8fa54d        node                8
36f3464a2197        nginx               1.15.2-alpine
```

## docker search

搜索镜像

```shell
# 在 registry 中搜索镜像
$ docker search [query]

$ docker search mysql
INDEX       NAME                DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
docker.io   docker.io/mysql     MySQL is a widely used, open-source relati...   9553      [OK]
docker.io   docker.io/mariadb   MariaDB is a community-developed fork of M...   3471      [OK]






# 把本地 image 上传到 registry 中 (此时会把所有 tag 都上传上去)
$ docker push [imageName]
```

搜索 `mysql` 镜像 `stars` 数大于 5000

```shell
$ docker search mysql --filter=STARS=5000
INDEX       NAME                DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
docker.io   docker.io/mysql     MySQL is a widely used, open-source relati...   9553      [OK]
```

## docker pull

```shell
$ docker pull [OPTIONS] NAME[:TAG|@DIGEST]
```

从 registry 中获取镜像 （若无指定 tag 名称，则默认使用 latest 这个 tag）

```shell
$ docker pull mysql
Using default tag: latest  # 不写tag 默认： last 即使用最新的版本
Trying to pull repository docker.io/library/mysql ...
latest: Pulling from docker.io/library/mysql
afb6ec6fdc1c: Pull complete    # 分层下载 docker 镜像核心  联合文件系统
0bdc5971ba40: Pull complete
97ae94a2c729: Pull complete
f777521d340e: Pull complete
1393ff7fc871: Pull complete
a499b89994d9: Pull complete
7ebe8eefbafe: Pull complete
597069368ef1: Pull complete
ce39a5501878: Pull complete
7d545bca14bf: Pull complete
211e5bb2ae7b: Pull complete
5914e537c077: Pull complete
Digest: sha256:a31a277d8d39450220c722c1302a345c84206e7fd4cdb619e7face046e89031d  # 签名
Status: Downloaded newer image for docker.io/mysql:latest   # 真实地址
```

指定版本下载

```shell
[root@iZwz9hqfjhnsbszaxamqqvZ ~]# docker pull mysql:5.7
Trying to pull repository docker.io/library/mysql ...
5.7: Pulling from docker.io/library/mysql
afb6ec6fdc1c: Already exists
0bdc5971ba40: Already exists
97ae94a2c729: Already exists
f777521d340e: Already exists
1393ff7fc871: Already exists
a499b89994d9: Already exists
7ebe8eefbafe: Already exists
4eec965ae405: Pull complete
a531a782d709: Pull complete
270aeddb45e3: Pull complete
b25569b61008: Pull complete
Digest: sha256:d16d9ef7a4ecb29efcd1ba46d5a82bda3c28bd18c0f1e3b86ba54816211e1ac4
Status: Downloaded newer image for docker.io/mysql:5.7
```

## docker rmi

删除镜像

> [删除一个或者多个镜像](https://docs.docker.com/engine/reference/commandline/rmi/)

```shell
# docker rmi [OPTIONS] IMAGE [IMAGE...]

# 删除指定镜像 id
$ docker rmi -f 镜像id

# 删除多个镜像
$ docker rmi -f 镜像id 镜像id 镜像id 镜像id

# 删除所有镜像
$ docker rmi -f $(docker images -aq)

# 删除所有没有 tag 的镜像
$ docker rmi $(docker images -f "dangling=true" -q)
```
