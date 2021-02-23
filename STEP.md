# 💡 monorepo templates

- client (create-react-app)
- server (express.js)
- test: jest
- code quality: eslint+prettier+airbnb
- package manager: lerna + yarn workspace
- all inclusives and work
- [Chinese Version](./README-CN.md)

## 🪕 1. Initialize

---

### 📑 general

```shell
$ npm init -y
$ touch README.md README-cn.md
$ npx license (MIT)
$ git init
```

### 📑 default .files

```shell
$ tar xzf ../ms/bin/default-dot.tar.gz
```

default dot-files include:

- .editorconfig
- .eslintrc.json
- .eslintignore
- .nvmrc
- .env
- .gitignore
- .prettierrc
- .prettierignore
- .babelrc
- .markdownlint.json

### 📑 eslint, prettier, airbnb

```shell
$ npx eslint --init
$ npm i -D prettier
$ npm i -D eslint-plugin-prettier eslint-config-prettier
$ npm i -D eslint-plugin-node eslint-config-node
```

config `.eslintrc.json`(3 个地方需要配置)

```json
{
  "extends": ["airbnb", "prettier", "plugin:node/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

### 📑 babel support

install the following in `individual` folder instead of root, e.g. `packages/server/`

```shell
$ npm i -D @babel/core @babel/node @babel/preset-env
$ npm i -D @babel/cli @babel/register
```

### 📑 tools

```shell
$ npm i -D lerna husky commitizen concurrently cross-env lint-staged nodemon
$ npm i dotenv
```

### 📑 lerna

```shell
$ npx lerna init
```

### 📑 setup packages

```shell
$ mkdir packages && cd _
$ npx express-generator server
$ npx create-react-app client
$ mkdir common
```

## 🪕 2. lerna + yarn workspaces

- lerna.json

```json
{
  "npmClient": "yarn",
  "useWorkspaces": true
}
```

- package.json

```json
{
  "private": true,
  "workspaces": ["packages/*"]
}
```

- install all dependencies in `packages/`

```shell
$ lerna clean
$ lerna bootstrap
```

Or `npm-run-all`:

```shell
$ yarn add npm-run-all -D -W
```

## 🪕 3. More

- error An unexpected error occurred: "expected workspace package to exist for \"eslint\"".

  ```shell
  $ yarn upgrade-interactive
  $ yarn -v # 1.22.10
  $ yarn help policies
  $ yarn policies set-version 1.18.0
  ```

- [Why Lerna and Yarn Workspaces is a Perfect Match for Building Mono-Repos – A Close Look at Features and Performance](https://doppelmutzi.github.io/monorepo-lerna-yarn-workspaces/)
