<template>
  <div>
    <h1 class=super>Hello {{name}} ! </h1>
    <!-- v-show v-bind -->

    <button @click=changeColor>
      Push me!
    </button>
    <h1 :class="{red :ok}">Привет!</h1>
    <h3 :style ="{fontSize:fsize+'px' , color:'green', fontWeight :'400'}">text hello </h3>
  <!-- <ol>
      <li v-for ="i in users" >{{i.id}}. {{i.name}} </li>
    </ol>-->
   <a :href="url">text </a>
    <table border="1">
      <thead>
        <th>ID</th>
        <th>имя</th>
      </thead>
      <tbody>
        <tr v-for= 'i in users'>
          <td>{{i.id}} </td>
          <td>{{i.name}}</td>
        </tr>
      </tbody>
    </table>
    <input type="range"   value="utf-8" />
  </div>

</template>
<script>
  export default {
    data() {
      return {
        name: 'Petro',
        ok: true ,
        fsize :20 ,
        users : [
          {id :1, name:'Petro'}, 
          {id:2, name: 'Ira'}, 
          {id:3, name :'Mia'}, 
        ], 
        url:"http://Google.com" 
      }
    },
    methods: {
      changeColor() {
        if (this.ok == true) {
          this.ok = false;
        } else {
          this.ok = true;
        }
        this.fsize++;
      }

    }
  }

  </script>
  <style>
    .red {
      color: red;
      font-weight: 400;
    }
  </style>