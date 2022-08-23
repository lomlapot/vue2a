<template>
  <form @submit.prevent class="form">
    <h3>Создание поста</h3>
    <my-input 
    v-model='post.title'
    placeholder="Название"></my-input>
    <my-input
    v-model='post.body'
    placeholder="Описание"></my-input>
    
      <my-button @my-click =createpost
       class=btnCreate>
        Создать пост
      </my-button>
    
  </form>

</template>
<script>
// import MyButton from './UI/MyButton.vue';
  export default {
    name:'post-form', 
 /*  components: {
      MyButton
    },*/
    data() {
      return {
        post: {
          id: Date.now(),
          title: '',
          body: '',
        }
      }
    },
    methods: {
      createpost() {
        this. post.id = Date.now();
        this.$emit('create', this.post);
        this.post = {
         //  id:Date.now(),
          title: '',
          body: '',
        }
      }
    }
  }
  </script>
  <style>
    .form {
      width: 100%;
      display: flex;
      flex-direction: column;
      border: 1px
      margin: 0;
    }
   /* .input {
      border: 1px solid teal;
      width: 100%;
      font-size: 22px;
      margin-bottom: 5px;
    }*/
    .btnCreate {
      align-self: flex-end;
      margin-top: 12px;
    }
  /*  .btn {
      padding: 10px 15px;
      background: none;
      color: teal;
      border: 1px solid teal;*/
    }
  </style>