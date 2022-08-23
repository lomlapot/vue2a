<template>
  <select :value ='value'
   @input="changeOption">
    <option  disabled value=""> Сортировать по</option>
     <option v-for="option in options"
     :key ="option.value"
     :value="option.value"
     >
      {{option.name}} 
     </option>
  </select>
</template>
<script>
  export default {
    name: 'my-select',
    props:{
      options:{
        type:Array,
        default:()=>[]
      },
     value:{type:String } ,
      
    },
   methods:{
    changeOption(event){
        this.$emit("input",event.target.value);
        console.log ('change ')
      
    }
        
        
      }
  }
</script>
<style>
  
</style>