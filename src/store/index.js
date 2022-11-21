import { createStore } from 'vuex'

export default createStore({
  state: {
    // 메뉴탭 관리 변수
    MenuTabView: false,
  },
  getters: {
  },
  mutations: {
    // 메뉴탭 관리
    setMenuTabView(state){
      state.MenuTabView = !state.MenuTabView
    },
  },
  actions: {
    // 메뉴탭 관리
    MENUTABVIEW(context){
      context.commit('setMenuTabView')
    },
  },
  modules: {
  },
})
