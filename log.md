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

### 2017/7/6 
template 只能包含一个子标签 v-for :key 
解决右边窗口滑动的问题 刚开始加了
```js
 <el-card style="height:100%;overflow-y:scroll">
    ...
 </el-card>
 ```
 出现滑动条,，但是不能滑动，好像是改了哪里的flex就莫名能滑动了，但好像改的地方无关联，玄学:(

### 2017/7/7
webpack.dev.config.js(开发) webpack.prod.config.js(生产)   
Representational State Transfer（表现层状态转移）CRUD 增删改查 就是用URL定位资源，用HTTP描述操作     
[RESTful定义](http://baike.baidu.com/link?url=zbhZv7ahtxmgc1EZXbjdMCYC21ynMf8Cedv-TEJqejyjzDBywfXyQYc3jl4pntlqa0_6BAryU9k874IJwi2azq)  
[RESTful解释](https://www.zhihu.com/question/28557115)  
[理解RESTful博文](http://www.ruanyifeng.com/blog/2011/09/restful)   
Server提供的RESTful API中，URL中只使用名词来指定资源，原则上不使用动词  
有状态 登录->进入办公->进入薪资查询->输入密码->看到工资  
无状态更容易使客户端获得服务器资源 salary/4  

### 2017/7/9
[理解vue生命周期](https://cn.vuejs.org/v2/guide/instance.html#实例生命周期) create有数据但是没有el元素   
在created函数中加载后台数据 如一个创建和显示文章的界面 在created中 向后台请求数据 后台返回info  
vuex 多个组件共享状态 以一个全局的单例模式管理 mapState返回一个对象 可以...mapState对象展开与局部计算混合使用[例子](http://vuex.vuejs.org/zh-cn/state.html)