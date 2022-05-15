<script >
import { RouterLink, RouterView } from 'vue-router'
import router from '../router/index'
import store from '../vuex/vuex'
export default {
  name: 'City',
  data () {
    return {
    width: '126px',
    isActive: true, 
    city: "",
    }
  },
  methods:{
    activeElement(e){
     document.querySelectorAll(".contaner-item").forEach(element => {
      element.classList.remove("activeBackground");
    });
    document.querySelectorAll(".contaner-item__active").forEach(element => {
      element.classList.remove("activeItems");
    });
    document.querySelectorAll(".contaner-item__text").forEach(element => {
      element.classList.remove("activeText");
    });
    
    this.city=e.target.innerText;
      e.currentTarget.classList.add("activeBackground");
      e.currentTarget.firstElementChild.classList.add("activeItems");
      e.currentTarget.lastElementChild.classList.add("activeText");
    this.width = '147px';
    },
    submitElement(){
      store.dispatch('incrementPush',{city: this.city})
      router.beforeEach(()=>{
        if(this.city === ""){
          return false;
        }
      });
    }
  }
}

</script>
<template>
  <main class="about">
    <div class="containerMain">
      <div class="containerMain-items">
        <div class="progressBar">
          <div class="progressBar-state" v-bind:style="{ width: this.width }" ></div>
        </div>
        <p class="text">Какой из городов лишний?</p>
        <div class="contaner-item" v-on:click="activeElement" >
          <div class="contaner-item__active" ></div>
          <p class="contaner-item__text" >Вашингтон</p>
        </div>
        <div class="contaner-item" v-on:click="activeElement" >
          <div class="contaner-item__active"></div>
          <p class="contaner-item__text">Лондон</p>
        </div>
        <div class="contaner-item" v-on:click="activeElement" >
          <div class="contaner-item__active"></div>
          <p class="contaner-item__text">Париж</p>
        </div>
        <div class="contaner-item" v-on:click="activeElement" >
          <div class="contaner-item__active"></div>
          <p class="contaner-item__text">Нью-Йорк</p>
        </div>
        <div class="contaner-item" v-on:click="activeElement" >
          <div class="contaner-item__active"></div>
          <p class="contaner-item__text">Москва</p>
        </div>
        <div class="contaner-item" v-on:click="activeElement" >
          <div class="contaner-item__active"></div>
          <p class="contaner-item__text">Оттава</p>
        </div>
        <RouterLink class="containerMain-items__buttom" v-on:click="submitElement" to="/gender/birthYear/excess/number/colorBlock/colorBlock2/city/figure">далее</RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
.about {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: url("/src/assets/rain_bk2.png")  no-repeat;
  background-size: cover ;
}
.containerMain{
  padding-top: 17px;
  width: 320px;
  height: 568px;
  background: transparent;
}
.containerMain-items{
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 320px;
  height: 568px;
  background: transparent;
}
.progressBar{
  width: 260px;
  height: 11px;
  background: rgba(242, 243, 243, 0.5);
  mix-blend-mode: normal;
  
  border-radius: 10.5px;
}
.progressBar-state{
  height: 11px;
  background: #3BDE7C;
  border-radius: 10.5px;
}
.text{
  font-family: PT Serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  margin-top: 37px;
  margin-bottom: 27px;
  
}
.contaner-item{
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 320px;
  height: 50px;
  margin-bottom: 8px;
  cursor: pointer;
  background-color: rgba(242, 243, 243, 0.15);
}
.contaner-item__active{
  width: 20px;
  height: 20px;
  border: 1px solid #FFFFFF;
  border-radius: 50%;
  margin-left: 35px;
  background-color: none;
}
.contaner-item__text{
  font-family: PT Serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 58px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: #FFFFFF;
  margin-left: 39px;
}
.containerMain-items__buttom{
  width: 189px;
  height: 41px;
  background: #DADADA;
  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top: 29px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8E8E8E;
}
.containerMain-items__buttom:active{
  background: radial-gradient(50% 50% at 50% 50%, #FFC700 0%, #FFC700 100%);
  color: #0D0C11;
}

.activeBackground{
  background: rgba(255, 199, 0, 1);
}
.activeItems{
  background: #2950C2;
  border: 1px solid black;
}
.activeText{
  color: black;
}
</style>