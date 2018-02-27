import Vue from 'vue'
import VueFractionGrid from 'vue-fraction-grid'
import App from './App.vue'

Vue.use(VueFractionGrid, {
  container: '80%',
  gutter: '0'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
