import Vue from 'vue';
import App from './App.vue';
import components from './components/newComp/UI/library.js';
import router from 'vue-router';
//import Home from './router/Home.js'

components.forEach(compon =>{
  Vue.component(compon.name, compon)
});

 new Vue({
   router, 
 //render: h => h(App), 
 render: function(h) {
    return h(App)
}
  
}).$mount('#app');


