# Start

## Get Docker

### Ubuntu

```bash
# sudo 普通用户希望用root权限执行
# wget 下载命令
# -qO(字母) 限制输出跟普通输出
# | sh 用SH的方式执行
sudo wget -qO- https://get.docker.com | sh

# 这个命令的意思是把当前用户加入docker用户组。
sudo usermod -aG docker 用户名

# 安装 docker-compose
curl https://github.com/docker/compose
```

### CentOS

```bash
# CentOS7 系统 CentOS-Extras 库中已带 Docker，可以直接安装：
$ sudo yum install docker

# 安装之后启动 Docker 服务，并让它随系统启动自动加载。
$ sudo service docker start
$ sudo chkconfig docker on
```

## Overview

![devops](../.vuepress/images/docker/devops.png)

**Docker image**: It is an executable file which contains cutdown operating system and all the libraries and configuration needed to run the application. It has multiple layers stacked on top of each other and represented as single object. A docker image is created using docker file, we will get to that in a bit.

**Docker Container**: It is a running instance of docker image. there can be many containers running from same docker image.

## Dockerfile

Environment variables are supported by the following list of instructions in the [Dockerfile](https://docs.docker.com/engine/reference/builder/):

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

For example

```Dockerfile
# pulls node.js docker image from docker hub
FROM node:8

# The ARG instruction defines a variable
# that users can pass at build-time to the builder with the
# `docker build` command using the --build-arg <varname>=<value> flag.
# docker build --build-arg ENV_TAG=prod .
ARG ENV_TAG
ENV ENV_TAG ${ENV_TAG}
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 8081
CMD node index.js
```

## Image

### 查看镜像

> [查看镜像列表](https://docs.docker.com/engine/reference/commandline/images/)

```bash
# docker images [OPTIONS] [REPOSITORY[:TAG]]

# List the most recently created images
$ docker images

# List images by name and tag
$ docker images java
$ docker images java:0
```

### 创建镜像

> [从 `Dockerfile` 文中创建镜像](https://docs.docker.com/engine/reference/commandline/build/)

```bash
# docker build [OPTIONS] PATH | URL | -
$ docker build -t [imageName] [pathToFolder]
$ docker build -t hello-world .

# 多个环境变量
$ docker build --build-arg HTTP=http://10:1234 --build-arg FTP=http://40:4567 .
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

### 删除镜像

> [删除一个或者多个镜像](https://docs.docker.com/engine/reference/commandline/rmi/)

```bash
# docker rmi [OPTIONS] IMAGE [IMAGE...]
$ docker rmi [image]
```

### Tag

给 image 打 tag

```bash
$ docker tag [imageId] [imageName]
```

### 远程仓库

```bash
# 在 registry 中搜索镜像
$ docker search [query]

# 从 registry 中获取镜像 （若无指定 tag 名称，则默认使用 latest 这个 tag）
$ docker pull [imageName]

# 把本地 image 上传到 registry 中 (此时会把所有 tag 都上传上去)
$ docker push [imageName]
```

## Container

### 创建

```bash
# 创建 container
$ docker create

# 创建并运行 container
$ docker run [image]

# 创建并运行 container 后进入其 bash 控制台
$ docker run -t -i [image] /bin/bash

# 创建并运行 container 并让其在后台运行，并端口映射
# docker run -p [port in container]:[port in physical system] -d [image] [command]
$ docker container run -p 4000:8081  hello-world
```

### 查看

```bash
# 查看正在运行的所有 container 信息
$ docker ps

# 查看最后创建的 container
$ docker ps -l

# 查看所有 container ，包括正在运行和已经关闭的
$ docker ps -a

# 输出指定 container 的 stdout 信息（用来看 log ，效果和 tail -f 类似，会实时输出。）
$ docker logs -f [container]

# 获取 container 指定端口映射关系
$ docker port [container] [port]

# 查看 container 进程列表
$ docker top [container]

# 查看 container 详细信息
$ docker inspect [container]
```

### 操作

```bash
# 停止 continer
$ docker stop [container]

# 强制停止 container
$ docker kill [container]

# 启动一个已经停止的 container
$ docker start [container]

# 重启 container (若 container 处于关闭状态，则直接启动)
$ docker restart [container]

# 删除 container
$ docker rm [container]
```

## 容器交互模式

进入容器交互模式

```bash
$ docker exec -it <CONTAINER NAME> /bin/bash
```

退出容器交互模式

```bash
exit

# 或者

Ctrl+P+Q
```
