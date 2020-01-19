import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router' //if named index.js, can just reference the folder... i.e., ./router
import store from '@/store/store'
import 'nprogress/nprogress.css'
import Vuelidate from 'vuelidate'
import '@/services/GlobalComponentRegistration'

Vue.use(Vuelidate);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
