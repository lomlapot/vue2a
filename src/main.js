import Vue from 'vue';
import App from './App.vue';
import components from './components/newComp/UI/library.js';
import VueRouter from 'vue-router';
//import Home from './router/Home.js'
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'
import Test2 from './components/Test2.vue';
import Test3 from './components/Test3.vue';
import components from './components/newComp/UI/library.js';
import VueRouter from 'vue-router';
import Main from './pages/Main.vue'
import About from './pages/About.vue'
import F from './pages/F.vue'

components.forEach(compon =>{
  Vue.component(compon.name, compon)
});
const router = new VueRouter({
    mode:'history', 
    routes:[
    {
      path: '/',
      component: HelloWorld
    }, 
    {
      path: '/test', 
      component:Test
    }, 
    {
      path:'/test2', 
      component : Test2
    }, 
    {
      path:'/test3', 
      component:Test3
    }
      ]})
Vue.use(VueRouter)
 new Vue({
   router, 
 //render: h => h(App), 
 render: function(h) {
    return h(App)
}
  
}).$mount('#app');


