# vue-templete

> a vue templete

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

- 启动项目自动打开浏览器

```
autoOpenBrowser: true
```
- 使用sass

```
npm node-sass sass-loader --save-dev
```
- 使用vuex

```
npm install vuex --save-dev
添加vuex配置文件
```
- 引入axios做后台交互

```
npm install axios --save-dev
添加axios配置文件
```

- 生产模式去除所有`console.log`

```
const webpack = require('webpack')
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
      }
    })
  ]
```