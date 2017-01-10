import Vue from 'vue'
import App from './App'
import Router from './routes.js';
import VueResource from 'vue-resource';
import Auth from './plugins/Auth.js';

Vue.use(VueResource);
Vue.use(Auth);

// Configure alertify default settings
alertify.defaults.notifier.position = 'top-right';

// Configure HTTP intercepters
Vue.http.interceptors.push(function (request, next) {
  if (request.url[0] === '/') {
    request.url = process.env.API + request.url;
  }

  // Response interceptor -- used for handling errors
  next(function (response) {
    if (response.status === 422) {
      response.body.errors.forEach(function (e) {
        alertify.error(e);
      });
    }
  });
});

// Create our main Vue instance
new Vue({
  el: '#app',
  template: '<App/>',
  router: Router,
  components: {
    App
  }
})
