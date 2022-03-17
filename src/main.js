import Vue from 'vue'
import App from './App.vue'

// https://blog.fontawesome.com/how-to-use-vue-js-with-font-awesome/
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStar)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')



