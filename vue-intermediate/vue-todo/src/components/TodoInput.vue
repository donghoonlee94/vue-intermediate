<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  data: function() {
    return {
      newTodoItem : ""
    }
  },
  methods: {
    addTodo: function() {
      console.log(this.newTodoItem);
      // 저장하는 로직
      localStorage.setItem(this.newTodoItem, this.newTodoItem);
      this.clearInput();
    },    
    clearInput: function() {
      // 초기화 로직      
      this.newTodoItem = '';
    }
  }
}
</script>

<style scopes>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: white;
    height:50px;
    line-height:50px;
    border-radius: 5px;
  }
  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float:right;
    background: linear-gradient(to right, #6478FB, #8763Fb);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
  }
</style>