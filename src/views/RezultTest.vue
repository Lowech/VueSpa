<script >
import { RouterLink, RouterView } from 'vue-router'
import LoadingAnimate from '../components/LoadingAnimate.vue'
import router from '../router/index'
import store from '../vuex/vuex'
export default {
  name: 'RezultTest',
  data () {
    return {
    isDone: false,
    isloading: true,
    timerMin: "10",
    timerSec: "00",
    zeroMin: "",
    zeroSec: "",
    rezult: [store.getters.doneMass],
    }
  },
  components:{
    LoadingAnimate
  },
  mounted(){
      this.startTimer();
      this.loadingAnimate();
  },
  methods:{
    startTimer(){
        
        this.timerMin = "09";
        this.timerSec = '59';

    let timerNumber =  setInterval(()=>{
          this.timerSec--

    if(this.timerMin === 0 && this.timerSec === 0){
        clearInterval(timerNumber);
            this.timerMin = "0";
                this.timerSec = '0';   
     }

    if(this.timerSec === 0){
        this.timerMin--;
            this.timerSec = 59;
    }

    if(this.timerMin <= 8){
        this.zeroMin = "0";
    }else{
        this.zeroMin = ""; 
     }

    if(this.timerSec <= 9){
        this.zeroSec = "0";
    }else{
        this.zeroSec = ""; 
     }
        },1000);
    },
    submitElement(){
        
      this.isDone = true;
 
    },
    loadingAnimate(){
        setTimeout(()=>{
          this.isloading = false;
          },5000)
    }
  }
}

</script>
<template>
  <main class="about">
    <div class="loading" v-if="isloading">
      <LoadingAnimate />
    </div>
    <div class="containerMain-rezult">
      <p class="text-header">Ваш результат рассчитан:</p>
      <p class="text-rezult"><span class="text-rezult__decor">Вы относитесь к 3%</span> респондентов, чей уровень интеллекта более чем на 15 пунктов отличается от среднего в большую или меньшую сторону!</p>
      <p class="text-call">Скорее получите свой результат!</p>
      <p class="text-important">В целях защиты персональных данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона</p>
      <p class="text-timer">Звоните скорее, запись доступна всего <br><span class="text-timer__modif">{{zeroMin}}{{timerMin}}:{{zeroSec}}{{timerSec}}</span> минут</p>  
        <RouterLink class="containerMain-items__call" v-on:click="submitElement" to="/gender/birthYear/excess/number/colorBlock/colorBlock2/city/figure/priority/img/star/rezultTest">Позвонить и прослушать результат</RouterLink>
        <div class="reaultMass" v-show="isDone">
            <div class="block-itemsRezultat">
                <p class="itemsMass-rezult">gender:</p><p class="itemsMass-rezult__state">{{this.rezult[0][0].gender}}</p>
            </div>
            <div class="block-itemsRezultat">
                <p class="itemsMass-rezult">birth_year:</p><p class="itemsMass-rezult__state">{{this.rezult[0][1].birth_year}}</p>
            </div>
            <div class="block-itemsRezultat">
                <p class="itemsMass-rezult">excess:</p><p class="itemsMass-rezult__state">{{this.rezult[0][2].excess}}</p>
            </div>
            <div class="block-itemsRezultat">
                <p class="itemsMass-rezult">num:</p><p class="itemsMass-rezult__state">{{this.rezult[0][3].num}}</p>
            </div>
            <div class="block-itemsRezultat">
                <p class="itemsMass-rezult">colorBlock:</p><p class="itemsMass-rezult__state">{{this.rezult[0][4].colorBlock}}</p>
            </div>
            <div class="block-itemsRezultat">
                <p class="itemsMass-rezult">colorBlock2:</p><p class="itemsMass-rezult__state">{{this.rezult[0][5].colorBlock2}}</p>
            </div>
            <div class="block-itemsRezultat">
                <p class="itemsMass-rezult">city:</p><p class="itemsMass-rezult__state">{{this.rezult[0][6].city}}</p>
            </div>
            <div class="block-itemsRezultat">
                <p class="itemsMass-rezult">figure:</p><p class="itemsMass-rezult__state">{{this.rezult[0][7].figure}}</p>
            </div>
            <div class="block-itemsRezultat">
                <p class="itemsMass-rezult">priority:</p><p class="itemsMass-rezult__state">{{this.rezult[0][8].priority}}</p>
            </div>
            <div class="block-itemsRezultat">
                <p class="itemsMass-rezult">img:</p><p class="itemsMass-rezult__state">{{this.rezult[0][9].img}}</p>
            </div>
            <div class="block-itemsRezultat">
                <p class="itemsMass-rezult">star:</p><p class="itemsMass-rezult__state">{{this.rezult[0][10].star}}</p>
            </div>   
        </div>
    </div>
  </main>
</template>

<style>
.about {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: url("/src/assets/rain_bk2.png")  no-repeat;
  background-size: cover ;
}
.loading{
  position: absolute;
  z-index: 9999;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("/src/assets/rain_bk2.png")  no-repeat;
  background-size: cover ;
}
.containerMain-rezult{
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 18px 5px 0 5px;
  max-width: 520px;
  height: auto;
}
.text-header{
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #FFFFFF;
}
.text-rezult{
  height: auto;
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  padding: 10px 0 22px 0;
  min-width: 300px;
}
.text-rezult__decor{
  text-decoration-line: underline;
}
.text-call{
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #3BDE7C;
  
}
.text-important{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #FFFFFF;
  background: #1C2741;
  border-radius: 6px;
  margin-top: 12px;
  padding: 15px 12px 11px 12px;
  min-width: 300px;
  
}
.text-timer{
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #3BDE7C;
  min-width: 300px;
}
.text-timer__modif{
  font-size: 20px;
}

.containerMain-items__call{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 290px;
  height: 92px;
  background: #EB1B00;
  border-radius: 5px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.05em;
  text-transform: none;
  color: #FFFFFF;
}
.containerMain-items__call::before{
  content: url("../assets/Group.png");
  width: 29px;
  height: 28px;
  margin: 0 15px 0 19px;
}

.containerMain-items__call:active{
  background: radial-gradient(50% 50% at 50% 50%, #FFC700 0%, #FFC700 100%);
  color: #0D0C11;
}
.reaultMass{
  min-width: 300px;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #1C2741;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
}
.block-itemsRezultat{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding-top: 5px;
}
.itemsMass-rezult{
  min-width: auto;
  height: auto;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.05em;
  text-transform: none;
  color: #FFFFFF;
}
.itemsMass-rezult__state{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: yellow;
  text-align: end;
  text-transform: none;
}
</style>