<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="index" class="shadow">
        <i class="checkBtn fas fa-check" :class="{checkBtnCompleted: todoItem.completed}" @click="toggleComplete({todoItem, index})"></i>
        <span :class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
        <span class="removeBtn" @click="removeTodo({todoItem, index})">
          <i class="fas fa-trash"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    // 컴포넌트에서 받는 메소드 : store에서 가져올 Mutations, 인자는 암묵적으로 주나 여러개인 경우 객체로 묶어야 함.
    // 클릭하면 메소드를 발동시키면서 인자 값을 전달 받고, mapMutaions을 통해 store에 있는 mutations로 전달함.
    // 배열로 표현할 수도 있으며, 메소드 이름과 store의 Mutations에 선언된 이름이 같을 경우 ...mapMutations([removeTodo,toggleComplete])로 가능. 객체도 가능.

    ...mapMutations({
      removeTodo : 'removeTodoItem',
      toggleComplete : 'toggleOneItem',
    }),
    // removeTodo(todoItem, index) {
    //   // this.$emit('removeTodoItem', todoItem, index)
    //   this.$store.commit('removeTodoItem', {todoItem, index})
    // },
    // toggleComplete(todoItem,index) {
    //   // this.$emit('toggleComplete', todoItem, index)
    //   this.$store.commit('toggleOneItem', {todoItem, index})
    // }
  },
  computed: {
    ...mapGetters(['storedTodoItems'])
  },
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height:50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .checkBtnCompleted {
    color: #b3adad;
   }
   .textCompleted {
     text-decoration: line-through;
     color: #b3adad;
   }
   .removeBtn {
     margin-left: auto;
     color: #de4343;
     cursor: pointer;
   }

/* 리스트 아이템 트렌지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>