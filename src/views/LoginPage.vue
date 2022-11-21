<template>
  <div class="loginPage">
    <h1>이용자 로그인</h1>
    <form-login />
  </div>
</template>

<script>
import FormLogin from '@/components/Form/FormLogin.vue'
export default {
  components: {
    FormLogin,
  },
}
</script>

<style scoped>
.loginPage {
  background: rgb(230, 230, 230);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  margin: 5vh;
}
</style>