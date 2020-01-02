# Docker

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
# CentOS7 系统 CentOS-Extras 库中已带 Docker，可以直接安装
$ sudo yum install docker

# 启动 Docker 服务
$ sudo service docker start

# 随系统启动自动加载 docker
$ sudo chkconfig docker on
```
