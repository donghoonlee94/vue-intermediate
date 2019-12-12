<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeTodoItem="removeTodoItem" v-on:toggleComplete="toggleOneItem"></TodoList>
    <TodoFooter @clearAll="clearList"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data: function() {
    return {
      todoItems : [],
    }
  },
  //localStorage.getItem(localStorage.key(i)); 가져오는 로직
  //JSON.parse 객체로 돌린다. localStorage의 특성상 이렇게 하는 부분.
  created: function() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i ++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },  
  components: {
    TodoHeader : TodoHeader,
    TodoInput : TodoInput,
    TodoList : TodoList,
    TodoFooter : TodoFooter,
  }, 
  methods: {
    addOneItem: function(todoItem) {
        var obj = {completed: false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        this.todoItems.push(obj);
    },
    removeTodoItem: function(todoItem, index) {
      // localStorage.removeItem(key)
      //this.todoItems.splice(start, deleteCount);      
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);      
    },
    toggleOneItem: function(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearList: function() {
      window.localStorage.clear();
      this.todoItems = '';
    }
  }
}

</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0,0,0, 0.03);
}

</style>
