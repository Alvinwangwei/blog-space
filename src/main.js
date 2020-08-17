import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Toast from './common/Toast/toast'

Vue.use(Toast)

Vue.config.productionTip = false



var app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
