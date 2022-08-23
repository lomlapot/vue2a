<template>
    <button class="btn"
    @click ="mysup">
      <slot>кнопа</slot>
    </button>
    
</template>
<script>
  export default {
   name: 'my-button',
   methods :{
     mysup(){
       this.$emit('my-click');
     }
   }
  }
</script>

<style scoped >
  .btn {
    padding: 10px 15px;
    background: white;
    color: teal;
   border: 1px solid teal;
   margin: 5px ;
  }
</style>