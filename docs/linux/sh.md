# sh 脚本

## sh 文件

```sh
rm -rf /usr/local/nginx/html/ && \
unzip -d /usr/local/nginx/html/ dist.zip && \
mv /usr/local/nginx/html/dist/* /usr/local/nginx/html/ && \
rm -rf /usr/local/nginx/html/dist
```

## 执行权限

```bash
chmod 777 ./deploy.sh
./deploy.sh
```
