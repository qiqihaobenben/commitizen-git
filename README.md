# commitizen-git

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

<br />

## 不再进行繁琐的配置了，直接跳转 [cz-relax](https://github.com/qiqihaobenben/commitizen-relax) 进行一键初始化
<br />

#### 本项目可以帮助你体验或者配置 commitizen 友好的仓库，可以点击[《让你的 commit 更有价值》](http://chenfangxu.com/git/commit.html)查看更详细的配置过程说明。

#### 如果想体验一下，可以把 fork 当前仓库，然后 `npm install` 就好。

#### 如果你想配置自己的仓库，请按照下面的步骤操作

> 更新：因为 husky 升级后导致原来的配置方式失效，现增加了安装 husky 的版本为 4.3.8，后续会更新到最新的 husky 版本，并从写相应的配置方法。

##### 1、依赖安装，以下两种方案，选择其中一个你喜欢的

1.1 方案一： 全局安装 commitizen

```
// 依次执行

npm install -g commitizen

npm install --save-dev cz-customizable @commitlint/config-conventional @commitlint/cli husky@4.3.8 standard-version

commitizen init cz-customizable --save-dev --save-exact --force
```

1.2 方案二： 项目本地安装 commitizen，要求 NPM 5.2+

```
// 依次执行

npm install --save-dev commitizen cz-customizable @commitlint/config-conventional @commitlint/cli husky@4.3.8 standard-version

npx commitizen init cz-customizable --save-dev --save-exact --force
```

<br>

##### 2、把各种配置 copy 到你的仓库

- .cz-config.js
- commitlint.config.js
- husky.config.js

<br>

##### 3、在 package.json 的 scripts 中加入 standard-version

```
"scripts": {
    "release": "standard-version",
  },
```
