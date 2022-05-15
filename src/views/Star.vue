<script >
import { RouterLink, RouterView } from 'vue-router'
import router from '../router/index'
import store from '../vuex/vuex'
export default {
  name: 'Figure',
  data () {
    return {
    width: '211px',
    isActive: true, 
    massElem: ['34','36','53','44','66','42'],
    star: "",
    }
  },
  methods:{
    activeElement(e){
     document.querySelectorAll(".contaner-items__minBlock").forEach(element => {
      element.classList.remove("activeBorder");
    });
    
    this.star=e.target.innerText;
      e.currentTarget.classList.add("activeBorder");
     
    this.width = '260px';
    },
    submitElement(){
      store.dispatch('incrementPush',{star: this.star})
      router.beforeEach(()=>{
        if(this.star === ""){
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
        <p class="text">Вставьте подходящее число.</p>
            <img src="../assets/star.png" alt="картинка" class="img">
        <hr/>
        <div class="container-items">
            <div class="contaner-items__minBlock" 
            v-on:click="activeElement" 
            v-for="item in massElem" :key="item"
            v-bind:style="{ backgroundColor: item }">
        {{item}}</div>
        </div>
        <RouterLink class="containerMain-items__buttom" v-on:click="submitElement" to="/gender/birthYear/excess/number/colorBlock/colorBlock2/city/figure/priority/img/star/rezultTest">далее</RouterLink>
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
  margin-top: 33px;
  margin-bottom: 15px;
  
}
.container-items{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;;
  width: 300px;
  height: auto;
}
.img{
  width: 228px;
  height: 207px;
  margin-bottom: 24px;
}
hr{
  width: 320px;
  height: 4px;
  background: #F2F3F3;
  opacity: 0.15;
  margin-bottom: 19px;
}
.contaner-items__minBlock{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 41px;             
  height: 41px;
  cursor: pointer;
  box-shadow: 2px 1px 3px 1px rgba(255, 255, 255,0.2);
  background: white;
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 49px;
  text-align: center;
  text-transform: capitalize;
  color: #0D0C11;
}
.activeBorder{
  border: 6px solid #FFC700;
}
.containerMain-items__buttom{
  width: 189px;
  height: 41px;
  background: #DADADA;
  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top: 32px;
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

</style>