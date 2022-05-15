<script >
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="blockThree">
        <p class="blockThree-text">Также по результатам теста <span class="blockThree-text__weight">вы получите</span> подробные <span class="blockThree-text__weight">советы</span> по определению наиболее перспективной <span class="blockThree-text__weight">для вашего типа интеллекта сферы деятельности,</span> которая принесет вам скорейший финансовый результат.</p>
      <div class="blockThree-textButton">
        <img src="../assets/325-01.png" alt="картинка" class="blockThree-textButton__img">
        <RouterLink class="blockThree-textButton__button" to="/gender">пройти тест</RouterLink>
      </div>
   </div>
</template>

<style scoped>
.blockThree{
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  padding-top: 38px;
  background-color: white;
}
.blockThree-text{
  font-family: PT Serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #272727;
  text-align: left;
  padding-left: 11px;
  max-width: 380px;
}
.blockThree-text__weight{
  font-weight: bold;
  font-size: 24px;
}
.blockThree-textButton{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: auto;
  padding: 18px 0 40px 0;
}
.blockThree-textButton__img{
  width: 232px;
  height: 180px;
}
.blockThree-textButton__button{
  width: 200px;
  height: 44px;
  background: #FFC700;
  border-radius: 50px;
  border: none;
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.blockThree-textButton__button:active{
  background: #DADADA;
  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
  color: #8E8E8E;
}
</style>
