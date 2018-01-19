import Vue from 'vue'
import Router from 'vue-router'
import MainHome from '../components/MainHome';
import MainSkills from '../components/MainSkills';
import MainAbout from '../components/MainAbout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      name: 'Home',
      component: MainHome
    },
    {
      path:'/skills',
      name: 'Skills',
      component: MainSkills
    },
    {
      path: '/about',
      name: 'About',
      component: MainAbout
    }
  ]
})
