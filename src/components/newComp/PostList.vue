<template>
  <div>
    <div v-if='posts.length > 0'>
      <transition-group name="post-list">
        
        <post-item
          v-for='post in posts'
          :post='post'
          :key='post.id'
          class='post-list-item'
          @remove="$emit('remove', post)"
          ></post-item>
      </transition-group>

    </div>
    <h2 v-else
      style="color:red">Список постов пуст</h2>
  </div>
</template>
<script>
  import PostItem from './PostItem.vue'
  export default {
    components: {
      PostItem
    },
    //  props: ['posts'],
    props: {
      posts: {
        type: Array,
        required: true,
      },
      //  posts: Array,
    },
    data() {
      return {
        /*posts: [{
            title: 'hh',
            content: 'hhb',
          },
            {
              title: 'color',
              content: 'Petro ',
            },*/
      }
    },
  }
  </script>
  
  <style>
/*.p-list-item {
display: inline-block;
  margin-right: 10px;
}
.p-list-enter-active, .p-list-leave-active {
  transition: all 1s;
}
.p-list-enter, .p-list-leave-to {
  opacity: 0;
  transform: translateX(170px);
} */

.post-list-item {
  transition: all 1s;
}
.post-list-enter, .post-list-leave-to 
{
  opacity: 0;
  transform: translateX(80px);
}
.post-list-leave-active {
  position: absolute;
}
 </style>