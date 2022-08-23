<template>
  <div class="dialog" v-if="show"
  @click ="hide">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'my-dialog',
  props: {
      show: {
        type: Boolean,
        default: false,
      }
    },
    methods :{
      hide(){
        this.$emit('hi');
        console.log ("dialog hide"+this.show );
      }
    },
  }
  </script>
  <style scoped>
    .dialog {
      top: 0; 
      right: 0;
      left: 0;
      bottom: 0;
      position: fixed;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
    }
    .dialog__content{
      margin: auto;
      background: white;
      border-radius: 12px;
      min-height: 220px ;
      min-width: 380px;
      padding: 20px;
    }
  }
</style>