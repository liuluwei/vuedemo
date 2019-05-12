import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
console.log(App)
new Vue({
  render: function(createElement){
    return createElement(App)
  },
}).$mount('#app')
