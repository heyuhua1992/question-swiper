# game

> A Vue.js project

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


修改了webpack.base.conf
修改前
```
{
  test: /\.js$/,
  loader: 'babel-loader',
  include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
},
```
修改后
```
{
  test: /\.js$/,
  loader: 'babel-loader',
  include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client'), resolve('node_modules/swiper'), resolve('node_modules/dom7'), resolve('node_modules/ssr-window')]
},
```


现在还有问题就是 不能左右滑动