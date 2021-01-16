### general

```shell
$ npm init -y
$ touch README.md README-cn.md
$ npx license (MIT)
$ git init
```

### default .files

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

### eslint+prettier+airbnb

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

### babel support

install the following in `individual` folder instead of root, e.g. `packages/server/`

```shell
$ npm i -D @babel/core @babel/node @babel/preset-env
$ npm i -D @babel/cli @babel/register
```

### tools

```shell
$ npm i -D lerna husky commitizen concurrently cross-env lint-staged nodemon rimraf
$ npm i dotenv
```

### test

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

### config

```shell

$ mkdir packages && cd _
$ npx express-generator server
$ npx create-react-app client
$ mkdir common
```
