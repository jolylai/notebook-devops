---
title: GitHub
group:
  title: 协作
---

## 初始化仓库

```bash
echo "# NoteBook" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/jolylai/notebook.git
git push -u origin master
```

## 修改远程地址

```bash
git remote set-url origin <new url>
```

## 设置 SSH Key

提交代码时无需手动输入用户名密码，直接提交到远程仓库，简化代码提交，查看时是否已经生成 SSH Key

```bash
$ cd ~/.ssh
$ ls
id_rsa      id_rsa.pub      known_hosts
```

如果已经生成 `id_rsa` ,`id_rsa.pub`, `known_hosts` 则可以直接使用，如果没有则执行以下代码生成 key

```bash
ssh-keygen -t rsa -C "your.email@example.com" -b 4096
```

复制生成的公钥到粘贴板

```bash
# Git Bash on Windows / Windows PowerShell
cat ~/.ssh/id_rsa.pub | clip

# macOS
pbcopy < ~/.ssh/id_rsa.pub

# Linux
xclip -sel clip < ~/.ssh/id_rsa.pub

# Windows
type %userprofile%\.ssh\id_rsa.pub | clip
```

## 工具

使用的工具为[Travis](https://travis-ci.org/) [博客](https://voorhoede.github.io/front-end-tooling-recipes/travis-deploy-to-gh-pages/)

## 生成 GitHub token

[Tocken](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)
