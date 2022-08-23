import Main from './pages/Main'
import About from './pages/About'
import {createRouter} from 'vue-router'

const routes = [{
  path: '/',
  component: 'Main',
},
  {
    path: '/about',
    component: 'About',
  }]

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  
  routes // short for `routes: routes`
});


export default routerr;