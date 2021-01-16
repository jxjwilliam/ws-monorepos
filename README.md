# 💡 monorepo

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
- .nvmrc
- .env
- .gitignore
- .prettierignore
- .babelrc
- .eslintignore
- .markdownlint.json
- .prettierrc

### 📑 eslint, prettier, airbnb

```shell
$ npx eslint --init
$ npm i -D prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node
```

config `.eslintrc.json`(3 个地方需要配置)

```json
  "extends": ["airbnb", "prettier", "plugin:node/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
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
$ npm i -D lerna husky commitizen concurrently cross-env lint-staged nodemon rimraf
$ npm i dotenv
```

### 📑 config test

```shell
$ npm i -D mocha chai
$ npm i -D eslint-plugin-mocha
$ mkdir test
```

test/.eslintrc.json:

```json
"env": {
  "mocha": true
},
"extends": ["plugin:mocha/recommended"],
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

## 🪕 2. yarn workspaces

---

```shell
 yarn upgrade-interactive
```

## 🪕 3. lerna

---

```shell
$ lerna init
$ lerna bootstrap
```

- [Why Lerna and Yarn Workspaces is a Perfect Match for Building Mono-Repos – A Close Look at Features and Performance](https://doppelmutzi.github.io/monorepo-lerna-yarn-workspaces/)

## 🪕 4. More

---

### 📑 bug fix

- error An unexpected error occurred: "expected workspace package to exist for \"eslint\"".

  ```shell
  $ yarn -v # 1.22.10
  $ yarn help policies
  $ yarn policies set-version 1.18.0
  ```
