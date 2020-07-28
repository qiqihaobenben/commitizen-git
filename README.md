# commitizen-git

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## 本项目可以帮助你体验或者配置 commitizen 友好的仓库

<br>

## 如果想体验一下，可以把 fork 当前仓库，然后 `npm install` 就好。

<br>

## 如果你想配置自己的仓库，请按照下面的步骤操作

### 1、依赖安装，以下两种方案，选择其中一个你喜欢的

#### 1.1 方案一： 全局安装 commitizen

```
// 依次执行

npm install -g commitizen

npm install --save-dev cz-customizable @commitlint/config-conventional @commitlint/cli husky standard-version

commitizen init cz-customizable --save-dev --save-exact --force
```

#### 1.2 方案二： 项目本地安装 commitizen，要求 NPM 5.2+

```
// 依次执行

npm install --save-dev commitizen cz-customizable @commitlint/config-conventional @commitlint/cli husky standard-version

npx commitizen init cz-customizable --save-dev --save-exact --force
```

<br>

### 2、把各种配置 copy 到你的仓库

- .cz-config.js
- commitlint.config.js
- husky.config.js

<br>

### 3、在 package.json 的 scripts 中加入 standard-version

```
"scripts": {
    "release": "standard-version",
  },
```
