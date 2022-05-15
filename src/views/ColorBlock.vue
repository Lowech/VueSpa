<script >
import { RouterLink, RouterView } from 'vue-router'
import router from '../router/index'
import store from '../vuex/vuex'
export default {
  name: 'ColorBlock',
  data () {
    return {
    width: '84px',
    isActive: true, 
    massElem: ['gray','blue','green','red','yellow','brown','black','purple','teal'],
    colorBlock: "",
    }
  },
  methods:{
    activeElement(e){
     document.querySelectorAll(".contaner-items__item").forEach(element => {
      element.classList.remove("activeBorder");
    });
    
    this.colorBlock=e.target.style.backgroundColor;
      e.currentTarget.classList.add("activeBorder");
    this.width = '105px';
    },
    submitElement(){
      store.dispatch('incrementPush',{colorBlock: this.colorBlock})
      router.beforeEach(()=>{
        if(this.colorBlock === ""){
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
        <p class="text">Выберите цвет, который сейчас наиболее Вам приятен:</p>
        <div class="container-items">
            <div class="contaner-items__item" 
            v-on:click="activeElement" 
            v-for="item in massElem" :key="item.lenght"
            v-bind:style="{ backgroundColor: item }">
        </div>
        </div>
        <RouterLink class="containerMain-items__buttom" v-on:click="submitElement" to="/gender/birthYear/excess/number/colorBlock/colorBlock2">далее</RouterLink>
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
  margin-top: 28px;
  margin-bottom: 20px;
  width: 280px;
  height: auto;
}
.container-items{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: auto;
  height: auto;
}
.contaner-items__item{
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 75px;             
  height: 75px;
  margin-right: 21px;
  margin-bottom: 27px;
  cursor: pointer;
  box-shadow: 2px 1px 3px 1px rgba(255, 255, 255,0.2); 
}
.containerMain-items__buttom{
  width: 189px;
  height: 41px;
  background: #DADADA;
  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top: 34px;
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

.activeBorder{
  border: 6px solid #FFC700;
}

</style>