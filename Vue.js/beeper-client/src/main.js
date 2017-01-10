import Vue from 'vue'
import App from './App'
import Router from './routes.js';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router: Router,
  components: { App }
})
