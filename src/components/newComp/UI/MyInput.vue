<template>
<input type="text" 

@input='updateValue' class="input" />  
<!--   : value ='value' .-->
</template>
<script>
  export default {
    name: 'my-input', 
   // props:['value'], 
    methods:{
      updateValue(event){
        this.$emit('input', event.target.value);
      } 
    }
  }
</script>
<style scoped>
.input {
      border: 1px solid teal;
      width: 100%;
      font-size: 16px;
      margin-bottom: 5px;
} 
 
  
</style>