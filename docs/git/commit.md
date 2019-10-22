# Commit

> [Commit 规范](https://yanhaijing.com/git/2016/02/17/my-commit-message/)

### 格式

```
<Header>

<Body>

<Footer>
```

### 示例

```git
<!-- header -->
feat: 添加了分享功能

<!-- body -->
给每篇博文添加了分享功能

- 添加分享到微博功能
- 添加分享到微信功能
- 添加分享到朋友圈功能

<!-- footer -->
Issue #1, #2
Close #1
```

### Header ⭐️

- feat：新功能（feature）
- fix：修补 bug
- doc：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动

> 也可使用[Gitmoji](https://gitmoji.carloscuesta.me/)添加 emoji

### Body

Body 部分是对本次 commit 的详细描述，可以分成多行。

### Footer

Footer 部分只用于两种情况：

- 关联 Issue
- 关闭 Issue
