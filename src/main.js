import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VuePageTitle from 'vue-page-title'
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo)

Vue.config.productionTip = false

Vue.use(VuePageTitle, {
  router,
  suffix: 'Tosin Orimogunje - Front-End Developer and Designer from Lagos, Nigeria',
  prefix: ''
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')