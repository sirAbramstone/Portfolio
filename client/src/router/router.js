import Vue from 'vue'
import Router from 'vue-router'
import MainHome from '../components/MainHome';
import MainSkills from '../components/MainSkills';
import MainAbout from '../components/MainAbout';
import MainWork from '../components/MainWork';
import MainContact from '../components/MainContact';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: MainHome
    },
    {
      path: '/skills',
      name: 'Skills',
      component: MainSkills
    },
    {
      path: '/about',
      name: 'About',
      component: MainAbout
    },
    {
      path: '/work',
      name: 'Work',
      component: MainWork
    },
    {
      path: '/contact',
      name: 'Contact',
      component: MainContact
    }
  ]
})

