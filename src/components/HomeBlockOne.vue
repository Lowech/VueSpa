<script >
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
   <div class="blockOne">
     <div class="blockEntry">
       <p class="entryText">Пройдите точный и быстрый</p>
       <h1 class="headerText">тест на определение IQ</h1>
     </div>
     <div class="blockButton">
       <img src="../assets/rain_bk3.png" alt="картинка" class="blockButton-img">
       <RouterLink class="buttonText" to="/gender">пройти тест</RouterLink>
     </div>
     <div class="blockText">
       <p class="blockText-one">и получите рекомендации 
         <br>по развитию своего интеллекта</p>
       <p class="buttonTest-two">и улучшению финансового <br> благосостояния и личной жизни</p>
     </div>
     <div class="blockDetails">
       <div class="blockDetails-arrow"></div>
       <p class="blockDetails-text">подробнее</p>
     </div>
   </div>
</template> 

<style scoped>
.blockOne{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 27px;
  width: 100%;
  height: 100%;
  background: url("./src/assets/rain_bk2.png")  no-repeat;
  background-size: cover ;
}
.blockEntry{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  height: auto;
}
.entryText{
  font-family: 'PT Serif', serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFFFFF;
  padding-bottom: 27px;
}
.headerText{
  font-family: 'Yeseva One', cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #FFC700;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 260px;
  height: auto;
}
.blockButton{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 22px;
  
}
.blockButton-img{
  width: 200px;
  height: auto;
}
.buttonText{
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #0D0C11;
  cursor: pointer;
  padding: 0px;
  border-radius: 20px;
  width: 189px;
  height: 41px;
  background: radial-gradient(50% 50% at 50% 50%, #FFC700 0%, #FFC700 100%);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.buttonText:active{
  background: #DADADA;
  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
  color: #8E8E8E;
}

.blockText-one{
  font-family: 'PT Serif', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFC700;
}
</style>
