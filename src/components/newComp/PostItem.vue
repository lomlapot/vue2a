<template>
  <div>
    <div class="post">
      <div>
        <strong>ID:</strong>
        {{post.id}}
        <strong>Название:
        </strong> {{post.title}}
        <br>
        <strong> Содержание:
        </strong>
        <mark>
          {{post.body}}
        </mark>
      </div>
      
        <my-button @my-click="removePost" >
          🗑️
        </my-button>
      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'post-item',
    methods: {
      removePost() {
        this.$emit('remove', this.post);
        console.log ('remove' )
      }, 
    },

    // props:['post']
    props: {
      post: {
        type: Object,
        required: true,
      }
    }
  }
  </script>
  <style scoped>
    .post {
      padding: 15px;
      border: 2px solid red;
      background: #90d6e8;
      margin: 5px;
      text-align: left;
      font-size: 10px;
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
    .post__btn {
      align-self: flex-end;
    }
   .red{
     color: red;
   } 

  </style>