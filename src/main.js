import Vue from 'vue'
import App from './App.vue'
import VueGraph from 'vue-graph'
// import BootstrapVue from "bootstrap-vue"
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap-vue/dist/bootstrap-vue.css"
import './index.css'
// Vue.use(BootstrapVue)
Vue.use(VueGraph)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
