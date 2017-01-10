import Vue from 'vue'
import App from './App'
import Router from './routes.js';
import VueResource from 'vue-resource';

Vue.use(VueResource);

// Configure alertify default settings
alertify.defaults.notifier.position = 'top-right';
new Vue({
  el: '#app',
  template: '<App/>',
  router: Router,
  components: { App }
})
