# 💡 JavaScript Monorepo 模板

## 🪕 特点

### 📑 全栈开发模板

- 客户端（`create-react-app`）
- 服务器（`express.js`）
- 代码质量：`eslint` + `prettier` + `airbnb`
- 测试：`jest`
- 包管理：`lerna` + `yarn workspaces`

### 📑 微服务

- 当前流行模式
- 基本模板, 使用非常简单
- 扩展容易

## 🪕 启动

```shell
$ git clone ... && cd _
$ npx lerna bootstrap
$ yarn start
```

然后在浏览器中打开 localhost:3000, 它运作良好!

| pacakge    | usage                          | memo                    | URL                                                       |
| ---------- | ------------------------------ | ----------------------- | --------------------------------------------------------- |
| fronmatter | frontend sharing               | es6 library             | <https://www.npmjs.com/package/@williamjiang/frontmatter> |
| client     | frontend demo                  | create-react-app        |
| bffmatter  | backend for sharing            | commonjs library        | <https://www.npmjs.com/package/@williamjiang/bffmatter>   |
| server     | backend demo                   | express                 |
| assets     | static resource                | used for UI design      | <https://www.npmjs.com/package/@williamjiang/assets>      |
| scripts    | shell/node scripts for sharing | fake, db-setup,, devOps | <https://www.npmjs.com/package/@williamjiang/scripts>     |

### Notices

- cors, rdbms, no-sql, auth, 3rd-apis...
