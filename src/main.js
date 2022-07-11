/**
 * 项目入口文件
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.less'

Vue.config.productionTip = false

/**
 * 创建Vue根实例
 * 把router配置到根实例中
 * 通过render方法把根组件App渲染到#app入口节点中
 */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
