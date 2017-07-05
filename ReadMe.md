> [入门webpack](http://www.jianshu.com/p/42e11515c10f)  
> [webpack+vue+vueRouter](https://segmentfault.com/a/1190000008602934)
```js
npm install --save-dev vue-loader vue-template-compiler 用来解析vue的组件，.vue后缀的文件

npm install --save-dev css-loader style-loader 用来解析css
```
拓展：css-loader 和 style-loader，二者处理的任务不同，css-loader使你能够使用类似@import 和 url(…)的方法实现 require()的功能,style-loader将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中。

### 2017/7/5  
web-server-dev 内存 publicPath 虚拟路径
> [webpack路径base,--content-base, publicPath](http://www.cnblogs.com/chenshao/p/6362768.html)

