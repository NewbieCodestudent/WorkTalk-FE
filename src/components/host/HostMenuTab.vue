<template>
  <div class="menuTab">
    <div class="menuTabUserInfo">
      <i class="fa-solid fa-xmark menuTabClose fa-lg" @click="menuTabBtn" />
      <router-link to="/user/login">
        <span>로그인/회원가입</span>
      </router-link>
    </div>
    <div class="menuTabUserService">
      <ul>
        <li>
          <router-link to="/user/mypage/reservation">
            <i class="fa-regular fa-calendar-check fa-2x" />
            <p>예약리스트</p>
          </router-link>
        </li>
        <li>
          <router-link to="/user/mypage/review">
            <i class="fa-regular fa-comments fa-2x" />
            <p>이용후기<br>QnA</p>
          </router-link>
        </li>
        <li>
          <router-link to="/user/mypage/payment">
            <i class="fa-solid fa-credit-card fa-2x" />
            <p>결제내역<br>마일리지</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="menuTabServicecenter">
      <div>
        <span>1:1문의</span>
      </div>
      <div>
        <span>공지사항</span>
      </div>
      <div>
        <span>도움말</span>
      </div>
      <div>
        <span>서비스정보</span>
      </div>
    </div>
    <div class="menuTabHostpagemove">
      <span>
        이용자 페이지로 이동
        <i class="fa-solid fa-arrow-right" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
emits: {'menu-tab-btn': null},
  methods: {
    menuTabBtn(){
      this.$emit('menu-tab-btn')
    },
  },
}
</script>

<style scoped>
.menuTab {
  background: white;
  width: 35vw;
  position: fixed;
  text-align: center;
  top: 0;
  right: 0;
  font-weight: bold;
  font-size: 18px;
  border-left: 1px solid gray;
  z-index: 2;
}
.menuTabClose {
  position: absolute;
  top: 2%;
  left: 2%;
}
.menuTabUserInfo {
  background: rgb(138, 138, 226);
  color: white;
  height: 15vh;
  line-height: 15vh;
  border-bottom: 1px solid gray;
}
.menuTabUserService {
  height: 15vh;
  width: 100%;
  border-bottom: 1px solid gray;
}
.menuTabUserService ul {
  display: flex;
  list-style: none;
  justify-content: space-around;
  font-size: 15px;
}
.menuTabUserService ul li {
  padding-top: 3vh;
}
.menuTabServicecenter {
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  height: 55vh;
}
.menuTabServicecenter div {
  height: 13vh;
  line-height: 13vh;
}
.menuTabServicecenter div:not(:last-child) {
  border-bottom: 1px solid gray;
}
.menuTabHostpagemove {
  height: 15vh;
  background: rgb(200, 218, 243);
  align-items: center;
  line-height: 15vh;
}
li:hover, span:hover {
  color: rgb(81, 81, 209);
}
</style>