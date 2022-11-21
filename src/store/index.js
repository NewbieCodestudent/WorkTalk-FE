import { createStore } from 'vuex'

export default createStore({
  state: {
    // 메뉴탭 관리 변수
    MenuTabView: false,
    userType: '',
  },
  getters: {
  },
  mutations: {
    // 메뉴탭 관리
    setMenuTabView(state){
      state.MenuTabView = !state.MenuTabView
    },
    // 주소에 따른 userType 관리
    setUserType(state, userType){
      state.userType = userType
    },
  },
  actions: {
    // 메뉴탭 관리
    MENUTABVIEW(context){
      context.commit('setMenuTabView')
    },
    // 주소에 따른 userType 관리
    USERTYPE(context, userType){
      context.commit('setUserType', userType)
    },
  },
  modules: {
  },
})
