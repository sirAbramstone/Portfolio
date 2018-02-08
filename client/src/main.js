import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import router from './router/router';
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);
Vue.use(Router);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
});
