import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import router from './router/router';
import VueFormly from 'vue-formly';

Vue.use(Router);
Vue.use(VueFormly);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
});
