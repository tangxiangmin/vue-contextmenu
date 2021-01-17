import Vue from 'vue'
import App from './App.vue'

import '../dist/vue-contextmenu.css'
import contextmenu from '../src/index'
// import contextmenu from '../dist/vue-contextmenu.common'

Vue.config.productionTip = false

Vue.use(contextmenu, {name: 'contextmenu'})

new Vue({
    render: h => h(App),
}).$mount('#app')
