<template>  
    <div class="container-fluid">  
      <!-- Brand and toggle get grouped for better mobile display -->  
      <div class="navbar-header">  
        <a class="navbar-brand" href="#/mainPage">{{ msg }}</a>  
      </div>  
      <ul>
        <todo v-for="(todo,index) in groceryList" :key="'com1'+index" :todo="todo"></todo>
      </ul>
      <button @click="changeData">更改数据</button>
    </div><!-- /.container-fluid -->  
</template>  
<script>
import todo from "../components/todoList"
export default {
  components:{todo},
  name: 'myPage',
  data () {
    return {
      msg: '返回首页',
      groceryList:[{id:0,text:'蔬菜'},{id:1,text:'奶酪'}]
    }
  },
  computed:{
    newgro:function(){
      console.log(this.groceryList)
    }
  },
  methods:{
    changeData: function(){
      this.groceryList.push({id:3,text:'税鸽'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
