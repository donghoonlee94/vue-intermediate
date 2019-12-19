import Vue from 'vue' 
import Vuex from 'vuex'
import todoApp from './modules/todoApp'
// import * as mutations from './mutations'
// import * as getters from './getters'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    // todoApp : todoApp
    todoApp,
  },

  // state: {
  //   todoItems : storage.fetch(),
  // },
  // // 다른 파일로 분리, import * as name from '' 으로 가져오고, '속성 : 값' 명칭이 같으면 아래처럼 축약 가능.
  // getters,
  // mutations,
})