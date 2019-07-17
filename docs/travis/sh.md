# 服务器脚本

服务器上创建 `*.sh` 的文件

```sh
cd /root/HappyLittleStack && \
git pull && \
yarn && \
yarn run build && \
cd /root/HappyLittleStack/public && \
zip -r /root/HappyLittleStack/public/dist.zip . && \
cp -r /root/HappyLittleStack/public/dist.zip /var/www/happy-little-stack && \
unzip -o -d /var/www/happy-little-stack /var/www/happy-little-stack/dist.zip
```

::: tip
cd 的路径需要绝对路径，不然或出现路径不对的问题
:::

用 travis 执行服务器上的 `*.sh` 文件

```yaml {3}
after_deploy:
  - chmod 600 ~/.ssh/id_rsa
  - ssh root@"$HOST" -o StrictHostKeyChecking=no 'sudo /root/deploy/happyLittleStack.sh'
```
