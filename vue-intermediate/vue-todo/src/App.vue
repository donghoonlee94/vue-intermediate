<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  // data() {
  //   return {
  //     todoItems : [],
  //   }
  // },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  }, 
  methods: {
    // addOneItem(todoItem) {
    //     const obj = {completed: false, item: todoItem};
    //     localStorage.setItem(todoItem, JSON.stringify(obj));
    //     this.todoItems.push(obj);
    // },
    // removeTodoItem(todoItem, index) {
    //   // localStorage.removeItem(key)
    //   //this.todoItems.splice(start, deleteCount);      
    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index, 1);      
    // },
    // toggleOneItem(todoItem, index) {
    //   this.todoItems[index].completed = !this.todoItems[index].completed;
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // },
    // clearList() {
    //   localStorage.clear();
    //   this.todoItems = [];
    // }
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
