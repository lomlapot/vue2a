<template>
  <div id="app">
   <!--<img alt="Vue logo" src="./assets/logo.svg" />-->
   <!-- <HelloWorld msg="Welcome to vue2a."
   />-->
  <!-- <Test name = Petro surname='Litvin' />-->
           
  <!-- <test-2></test-2>-->
   <test-3></test-3>
    
    
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
//import Test from "./components/Test.vue";
//import Test2 from "./components/Test2.vue";
import Test3 from "./components/Test3.vue";
export default {
  name: "App",
  components: {
  //  HelloWorld, 
  //Test, 
  //Test2, 
  Test3, 
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

#app img {
  height: 100px;
  width: 100px;
}
</style>
