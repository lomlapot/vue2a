<template>
  <div>

    <h1 class="super">Привет {{name}}  {{surname}} {{like}}  </h1>
    <button @click='addLike'>add like</button>
    <input v-model=message>
    <p>
      {{message}}
    </p>
    <button @click = addComment>add comment </button>
    <ol>
      <li
        v-for='i of comments '>{{i}}
      </li>
    </ol>
  </div>
</template>
<script>
  export default {
    name: 'Test',
    props: ['name',
      'surname'],
    data :function() {
      return {
        like: 0,
        message: '',
        comments: [],
      }
    },
    methods: {
      addLike() {
        this.like++;
      },
      addComment() {
        this.comments.push(this.message);
        this. message='';
      },
    },
  }
  </script>
  <style scoped >
    h1 {
      color: blue;
    }
    .super {
      font-family: 'Pacifico', sans-serif;
      font-size: 30px;
    }
    li{
      text-align: left;
    } 
  </style>