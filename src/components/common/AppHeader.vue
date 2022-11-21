<template>
  <header>
    <div v-if="MenuTabView" class="background" @click="menuTabBtn" />
    <div class="LogoAndSearch">
      <router-link to="/">
        WorkTalk
      </router-link>
      <FormSearch />
    </div>
    <div>
      <i class="fa-solid fa-bars" @click="menuTabBtn" />
      <template v-if="user === 'user'">
        <UserMenuTab v-if="MenuTabView" @menu-tab-btn="menuTabBtn" />
      </template>
      <template v-else>
        <HostMenuTab v-if="MenuTabView" @menu-tab-btn="menuTabBtn" />
      </template>
    </div>
  </header>
</template>

<script>
import FormSearch from '@/components/Form/FormSearch.vue'
import UserMenuTab from '@/components/user/UserMenuTab.vue'
import HostMenuTab from '@/components/host/HostMenuTab.vue'
export default {
  components: {
    FormSearch,
    UserMenuTab,
    HostMenuTab,
  },
  data(){
    return {
      test: 'user',
      user: '',
    }
  },
  computed: {
    // 메뉴탭 관리
    MenuTabView(){
      return this.$store.state.MenuTabView
    },
  },
  created(){
    console.log(this.test)
    console.log(this.$route)
    if (this.test === 'user'){
      this.user = 'user'
    } else {
      this.user = 'host'
    }
  },
  methods: {
    // 메뉴탭 관리
    menuTabBtn(){
      this.$store.dispatch('MENUTABVIEW')
    },
  },
}
</script>

<style scoped>
header {
  display: flex;
  background: rgb(138, 138, 226);
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 10vh;
  padding: 0 2vw;
}
.LogoAndSearch{
  display: flex;
}
.background {
  position: fixed;
  background: rgba(0, 0, 0, 0.322);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}
</style>
