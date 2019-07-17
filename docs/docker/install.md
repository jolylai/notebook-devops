# Install

## MongoDB

### 下载官方镜像

```bash
docker pull mongo
```

### 启动

```js
docker run -p 27017:27017 -v <LocalDirectoryPath>:/data/db --name docker_mongodb -d mongo
```

**Tip**

- `-p` 指定容器的端口映射，mongodb 默认端口为 27017
- `-v` 为设置容器的挂载目录，这里是将即本机中的`<LocalDirectoryPath>`目录挂载到容器中的/data/db 中，作为 mongodb 的存储目录
- `--name` 为设置该容器的名称
- `-d` 设置容器以守护进程方式运行

### **进入 mongo 交互模式**

```bash
docker exec -it <CONTAINER NAME> /bin/bash
```
