<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <Modal v-if="showModal">
      <h3 slot="header">
        경고!
        <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
      </h3>
      <div slot="body">
        리스트에 추가할 항목을 적어주세요.
      </div>
    </Modal>    
  </div>
</template>

<script>
import Modal from './common/modal.vue'

/* eslint-disable no-console */
export default {
  data() {
    return {
      newTodoItem : "",
      showModal: false,
    }
  },
  methods: {
    addTodo() {
      // 저장하는 로직 // localStorage.setItem(key , value)
      //JSON.stringify(obj) string으로 바꿔줌. 바꾸지 않으면 객체를 인식하지 못 함. 추적하기 위해 사용한다.
      if (this.newTodoItem !== '') {
        this.$emit('addTodoItem', this.newTodoItem)
        this.clearInput();
      }else {
        this.showModal = !this.showModal
      }
    },    
    clearInput() {
      // 초기화 로직      
      this.newTodoItem = '';
    }
  },
  components: {
    Modal
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
  .closeModalBtn {
    color: #42b983;
  }
</style>