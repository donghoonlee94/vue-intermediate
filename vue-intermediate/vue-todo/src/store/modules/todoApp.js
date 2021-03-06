const storage = {
  //localStorage.getItem(localStorage.key(i)); 가져오는 로직
  //JSON.parse 객체로 돌린다. localStorage의 특성상 이렇게 하는 부분.
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i ++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },    
}

const state = {
  todoItems : storage.fetch(),
};

const getters = {
  storedTodoItems : (state) => {
    return state.todoItems;
  },  
};

const mutations = {
  addOneItem : (state, todoItem) => {
    const obj = {completed: false, item: todoItem};
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
  },
  removeTodoItem : (state, payload) => {
    // localStorage.removeItem(key)
    //this.todoItems.splice(start, deleteCount);      
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);      
  },    
  toggleOneItem : (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
  },    
  clearAll : (state) => {
    localStorage.clear();
    state.todoItems = [];
  }, 
};

// 한개만 추출될 수 있음
export default {
  state,
  getters,
  mutations,
}