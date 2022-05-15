<script >
import { RouterLink, RouterView } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BurgerSvg from '@/components/icons/burgerSvg.vue'
import store from './vuex/vuex'


export default {
  data () {
    return {
      picked: '',
      visible: false, 
      textIq: "тест на определение IQ",
    }
  },
  components:{
    BurgerSvg,
    HomeView
  },
  
  methods:{
    visibleElement(){
      this.visible= this.visible? false : true;
      store.dispatch('returnState')
    },
     returnState(){
      store.dispatch('returnState')
    }
  }
}

</script>

<template>
  <header class="header">
    <div class="burgerContainer" v-on:click="visibleElement">
      <BurgerSvg/>
    </div>
    <div class="wrapperNav">
      <nav class="nav-menu">
        <RouterLink  class="wrapperNav-items" to="/" v-on:click="returnState">главная</RouterLink>
        <RouterLink  class="wrapperNav-items" to="/infoTest" v-on:click="returnState">Информация о тесте</RouterLink>
        <RouterLink  class="wrapperNav-items" to="/gender" v-on:click="returnState">пройти тест</RouterLink>
      </nav>
      <div class="header-iq">
        <img src="./assets/rain_bk3.png" alt="картинка" class="img-iq">
        <p class="text-iq">{{textIq}}</p>
      </div>
    </div>
    <div class="sidebar" v-show="visible">
  <div class="sidebar-closeSidebar" v-on:click="visibleElement">
    <img src="./assets/icon.png" alt="картинка" class="sidebarClose">
  </div>
  <nav class="siderbarNav">
        <RouterLink class="siderbarNav-items" to="/" v-on:click="visibleElement">главная</RouterLink>
        <RouterLink class="siderbarNav-items" to="/infoTest" v-on:click="visibleElement">Информация о тесте</RouterLink>
        <RouterLink class="siderbarNav-items" to="/gender" v-on:click="visibleElement">пройти тест</RouterLink>
  </nav>
</div>
  </header>
      <router-view v-slot="{ Component  }">
        <transition name="routerView">
          <component :is="Component " />
        </transition>
      </router-view>
</template>

<style>
@import '@/assets/base.css';
.routerView-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
#app {
  width: 100%;
  margin: 0 ;
}

header {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 46px;
  background-color: rgba(24, 24, 24, 1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.burgerContainer{
  display: none;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 46px;
}
.burgerContainer:hover{
  cursor: pointer;
}
.wrapperNav{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 46px;
}
.header-iq{
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.img-iq{
  width: 48px;
  height: 47px;
}
.text-iq{
  font-family: 'Yeseva One';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFC700;
  margin-left: 9px;
}
.nav-menu{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 46px;
}
.wrapperNav-items{
  padding: 0 27px 0 0;
}
.sidebar{
  width: 100%;
  height: 100vh;
  background-color: rgba(24, 24, 24, 1);
  position: absolute;
  z-index: 1;
  
}
.sidebar-closeSidebar{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  height: auto;
}
.sidebarClose{
  width: 28px;
  height: 28px;
  margin: 18px 13px;
  cursor: pointer;
}
.siderbarNav{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  text-transform: uppercase;
  color: #FFFFFF;
  padding-left: 23px;

}
.siderbarNav-items{
  padding: 27px 0 0 0;
}
.router-link-active{
  color: #F4CE0C;
}
.green{
  color: #F4CE0C;
  font-weight: 400;
  font-size: 16px;
  text-transform: uppercase;
}
a{
  text-decoration: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  text-transform: uppercase;
  color: #FFFFFF;
}

@media (max-width: 500px) {
  .nav-menu{
    display: none;  
}
  .header-iq{
    display: flex; 
  }
 .burgerContainer{
   display: flex; 
 }
}

</style>
