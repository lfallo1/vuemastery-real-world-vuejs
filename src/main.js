import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router' //if named index.js, can just reference the folder... i.e., ./router
import store from '@/store/store'

/* Global component registration */
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
    './components',
    false,
    /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)

    const componentName = upperFirst(
        camelCase(
            fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
        )
    )

    Vue.component(
        componentName,
        componentConfig.default || componentConfig
    )
})
/* End global component registration */

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
