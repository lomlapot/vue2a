<template>
  <div class=g>
    <h2>Страничка с постами</h2>
    <my-input
      v-model='searchQuery'
      placeholder='Поиск'
      ></my-input>
    <div class="fl">
      <div class="bt">
        <my-button @my-click='fetchPosts'>Получить посты </my-button>
        <my-button @my-click='add'> Добавить пост</my-button>
      </div>
      <div class="bt">
      <!-- _____select_______:: -->
      <my-select v-model='selectedSort'
        :options='sortOptions'  class='m'
        ></my-select> 
        <my-input class ='m' placeholder="page"
        v-model:page="page"
        ></my-input>
        
        </div>
      <!--   _______:://   -->
    </div>
    <!--        dialog .     -->
    
<transition name="hide">
    <my-dialog :show=show @hi=hideWindow>
      <post-form @create='create_post'></post-form>
    </my-dialog>
    </transition>
    
    <post-list
      :posts='sortedAndSearchedPosts'
      @remove="removePost"
      ></post-list>
  </div>

</template>
<script>
  import PostForm from "./newComp/PostForm.vue";
  import PostList from "./newComp/PostList.vue";
  // import axios from "axios";
  export default {
    name: 'test-3',
    components: {
      PostForm,
      PostList,
    },
    //  props: ['show'],
    data() {
      return {
        show: false,
        posts: [],
        /* [{
          id: 1,
          title: 'title-1 ',
          body: 'Petro ',
        },
          {
            id: 2,
            title: 'title-2',
            body: 'Litvin'
          }],*/
        selectedSort: '',
        searchQuery: '',
        page:1,
        limit:4,
        sortOptions: [{
          value: 'title',
          name: 'по названию'
        },
          {
            value: 'body',
            name: 'по тексту'
          },
          {
            value: 'id',
            name: 'по id'
          },

        ],
        

        //  title: '',
        //  content: '',
      }
    },
    methods: {
        async (){
        
      },
      create_post(post) {
        this.posts.unshift(post);
        this.show = false;
        /* const newPost = {
          title: this.title,
          content: this.content,
        }
        if (this.title !== '' && this.content !== '') {
          this.posts.unshift(post);
        }
        this.posts.push({title,bod })
       this.title = '';
        this.content = '';*/
      },
      removePost(post) {
        this.posts = this.posts.filter(p => p.id !== post.id);
      },
      hideWindow() {
        this.show = false;
        console.log ("test3 hideWindow show = "+this.show);
      },
      add() {
        this.show = true;
        console.log ('show = '+this.show +' add');
      },
      fetchPosts() {
        try {
          fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}&_page=${this.page}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.posts = data;
          });
          /*const response =  axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3');
        this.posts=response.data;*/
        }catch(e) {
          alert("Ошибка")
        }
      },
    },
    //end methods
    mounted() {
      this.fetchPosts();
    },
    computed: {
      sortedPosts() {
        console.log ('sorted')
        try {
          return [...this.posts].sort((p, p2)=> p[this.selectedSort].localeCompare(p2[this.selectedSort]))
        }catch(e) {
        //  console.log (e)
          return [...this.posts].sort((p, p2)=> p[this.selectedSort]-p2[this.selectedSort])
        }
      },
      sortedAndSearchedPosts(){
        console.log ('search /!!!!!')
        return this.sortedPosts.filter(post => post.title.includes(this.searchQuery))
        
      }
    },
    watch:{
      page(newVale){
        console.log (newVale+'&&&&&&|');
/*fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}&_page=${this.page}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.posts = data;
          });*/
       this.fetchPosts();
      }
    }
    /*  watch: {
      selectedSort(newValue) {
        try {
          console.log(newValue+" watch!!!!");
          this.posts.sort((p, p2)=>
             p[newValue].localeCompare(p2[newValue])
          )
        }catch(e) {
         this.posts.sort((p, p2)=>
             (p[newValue]-p2[newValue])
          )
        }
      },
    },*/
  }
  </script>
  <style>
    * {
      box-sizing: border-box;
    }
    .main {}
    .bt {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 50%;
    }
    .fl {
      display: flex;
      justify-content: space-between;
    }
    .m{
      padding: 5px ;
    }
.hide-enter-active,

.hide-leave-active {

  transition: opacity 0.5s ease;

}

.hide-enter-from,

.hide-leave-to {

  opacity:;

}
    
  </style>