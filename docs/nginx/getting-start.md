---
title: 快速开始
order: 1
---

[Nginx 从入门到实践](https://juejin.im/post/5ea931866fb9a043815146fb#heading-11)

## 安装

Ubuntu 系统直接使用以下命令安装

```bash
apt-get install nginx
```

CentOS 系统使用以下命令安装

```bash
yum install nginx
```

验证`nginx` 是否已经安装成功

```bash
sudo nginx -v
```

启动 nginx

```bash
sudo systemctl start nginx
```

## 查看

在浏览器中输入公网 IP 地址或者 网址 查看`nginx` 是否已经启动成功,如果启动成功的话就能看见 Nginx 的默认页面

![](https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/nginx-default-page.png)

如何查看 ip 地址

```bash
ip addr
ip addr show eth0 | grep inet | awk '{ print $2; }' | sed 's/\/.*$//'
```

防火墙相关操作

```bash
systemctl status firewalld # 查看防火墙开启状态，显示running则是正在运行

systemctl start firewalld  # 开启防火墙
systemctl stop firewalld   # 关闭防火墙

# 开启`http` 和`https`
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https

# 添加开启端口，--permanent表示永久打开，不加是临时打开重启之后失效
sudo firewall-cmd --permanent --zone=public --add-port=8888/tcp

sudo firewall-cmd --reload      # 重启防火墙，永久打开端口需要reload一下

# 查看防火墙，添加的端口也可以看到
firewall-cmd --list-all
```

## 结构

`nginx` 将会安装在 `/etc/nginx/` 路径之下

```bash
# 配置文件 日志轮转 用于日志切割
/etc/logrotate.d/nginx

# 配置http协议的 Content-Type 与扩展名对应关系
/etc/nginx/mime.types
/etc/nginx/mime.types.default

# 主配置文件
/etc/nginx/nginx.conf
/etc/nginx/nginx.conf.default

# 系统守护进程管理器管理方式
/usr/lib/systemd/system/nginx.service
# 模块目录
/usr/lib64/nginx/modules
# 启动管理的终端命令
/usr/sbin/nginx

# 日志
/var/log/nginx
```

主要关注的文件夹

- `/etc/nginx/conf.d/` 文件夹，是我们进行子配置的配置项存放处，`/etc/nginx/nginx.conf` 主配置文件会默认把这个文件夹中所有子配置项都引入；
- `/usr/share/nginx/html/` 文件夹，通常静态文件都放在这个文件夹，也可以根据你自己的习惯放其他地方；

## 常用命令

Nginx 的命令在控制台中输入 nginx -h 就可以看到完整的命令，这里列举几个常用的命令：

```bash
nginx -s reload  # 向主进程发送信号，重新加载配置文件，热重启
nginx -s reopen	 # 重启 Nginx
nginx -s stop    # 快速关闭
nginx -s quit    # 等待工作进程处理完成后关闭
nginx -T         # 查看当前 Nginx 最终的配置
nginx -t -c <配置路径>    # 检查配置是否有问题，如果已经在配置目录，则不需要-c
```

复制代码 systemctl 是 Linux 系统应用管理工具 systemd 的主命令，用于管理系统，我们也可以用它来对 Nginx 进行管理，相关命令如下：

```bash
systemctl start nginx    # 启动 Nginx
systemctl stop nginx     # 停止 Nginx
systemctl restart nginx  # 重启 Nginx
systemctl reload nginx   # 重新加载 Nginx，用于修改配置后
systemctl enable nginx   # 设置开机启动 Nginx
systemctl disable nginx  # 关闭开机启动 Nginx
systemctl status nginx   # 查看 Nginx 运行状态
```
