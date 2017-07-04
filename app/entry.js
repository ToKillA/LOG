import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import App from './App.vue'
import hello from './Hello.js'
import index from './index.vue'
import routes from './routes.js'

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")