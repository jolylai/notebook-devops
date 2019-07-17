# Github

## 提交代码

```bash
echo "# NoteBook" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/jolylai/notebook.git
git push -u origin master
```

## 将项目托送到远程

```bash
git remote add origin https://github.com/jolylai/notebook.git
git push -u origin master
```

## 将项目推送到远程 gh-pages 分支

```bash
git subtree push --prefix dist origin gh-pages
// dist 为项目的文件路径
git subtree push --prefix docs/.vuepress/dist origin gh-pages
```

## 修改远程地址

```bash
git remote set-url origin <new url>
```

## SSH Key

```bash
# 生成 key
ssh-keygen -t rsa -C "your.email@example.com" -b 4096

# 将 key 复制到黏贴板

# Git Bash on Windows / Windows PowerShell
cat ~/.ssh/id_rsa.pub | clip

# macOS
pbcopy < ~/.ssh/id_rsa.pub

# Linux
xclip -sel clip < ~/.ssh/id_rsa.pub

# Windows
type %userprofile%\.ssh\id_rsa.pub | clip
```
