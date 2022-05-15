<script >
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
   <div class="blockFourth">
        <p class="blockFourth-textHeader">Прохождение теста займет у вас не более <span class="blockFourth-text__color">12 минут</span>, а его результаты вы сможете <span class="blockFourth-text__color">использовать всю жизнь.</span> </p>
      <div class="blockFourth-textMain">
        <p class="blockFourth-textMain__text">Профессиональная интерпретация и детально <span class="blockFourth-text__weight">проработанные рекомендации</span> позволят вам качественно <span class="blockFourth-text__weight">изменить все аспекты своей жизни:</span> от финансового до любовного.</p>
      </div> 
      <RouterLink class="blockFourth-Button" to="/gender">пройти тест</RouterLink>
      <div class="blockFourth-container">
        <div class="blockFourth-blockEllipse">
          <span class="blockFourth-blockEllipse__text">c</span>
        </div>
        <p class="blockFourth-textFooter">2019</p>
      </div>
   </div>
</template> 

<style scoped>
.blockFourth{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background: url("./src/assets/rain_bk2.png") no-repeat;
  background-size: cover ;
  padding-top: 56px;
  padding-bottom: 15px;
}
.blockFourth::after{
  position: absolute;
  content: url("./src/assets/lightning_PNG9.png");
  width: 75px;
  height: 165px;
  bottom: 105px;
  left: 1px;
}
.blockFourth::before{
  position: absolute;
  content: url("./src/assets/lightnin1g_PNG9.png");
  width: 122px;
  height: 165px;
  top: 66px;
  right: 1px;
}
.blockFourth-textHeader{
  font-family: Merriweather;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  text-align: left;
  padding: 0px 51px 14px 14px;
  max-width: 600px;
  height: auto;
}
.blockFourth-text__color{
  color: yellow;
}
.blockFourth-textMain{
  background: rgba(243, 243, 242, 0.8);
  border-radius: 20px;
  margin-left: 12px;
  margin-right: 12px;
  max-width: 600px;
  height: auto;
}
.blockFourth-textMain__text{
  font-family: Merriweather;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.05em;
  color: #181818;
  text-align: left;
  margin: 29px 16px 31px 14px;
}
.blockFourth-text__weight{
  font-weight: 700;
  font-size: 16px;
}
.blockFourth-Button{
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 50px;
  background-color: transparent;
  padding: 14px 18px 11px 18px;
  margin-top: 33px;
  cursor: pointer;
  z-index: 1;
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #FFFFFF;
}

.blockFourth-Button:active{
  background: #FFC700;
  border: 1px solid #FFC700;
  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
  color: #0D0C11;
}
.blockFourth-container{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
}
.blockFourth-blockEllipse{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8px;
  height: 8px;
  border: 0.8px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  margin-right: 5px;
}
.blockFourth-blockEllipse__text{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 5px;
  color: rgba(255, 255, 255, 0.5);

}
.blockFourth-textFooter{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.5);
}
</style>
