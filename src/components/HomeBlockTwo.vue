<template>
  <div class="blockTwo">
      <img src="../assets/“.png" alt="картинка" class="blockTwo-imgTopQuotes">
        <p class="blockTwo-text">Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта,
        но и выработать список  рекомендаций для повышения этого показателя.</p>
        <div class="blockTwo-containerImgBottomQuotes">
          <img src="../assets/“1.png" alt="картинка" class="blockTwo-imgBottomQuotes">
        </div>
   </div>
</template>

<style scoped>
.buttonTest-two{
  font-family: 'PT Serif', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFFFFF;
  
}
.blockDetails{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding-top: 11px;
  cursor: pointer;
}
.blockDetails-arrow{
  width: 16px;
  height: 16px;
  background: #FFFFFF;
  border-radius: 50%;
}
.blockDetails-arrow::before{
  content: url("./src/assets/iconArrow.png");
  width: 7px;
  height: 7px;
  bottom: 5px;
  left: 4px;
}
.blockDetails-text{
  font-family: 'PT Serif', serif;
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 11px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFFFFF;
  padding: 3px 0 11px 0;
  cursor: pointer;
}
.blockTwo{
  display: grid;
  grid-template-columns: minmax(12px,30%) minmax(280px,600px) minmax(12px,30%) ;
  grid-template-rows: 23px auto 23px ;
  width: 100%;
  height: auto;
  background: url("./src/assets/image.png") no-repeat;
  background-size: cover ;
  padding-bottom: 32px;
  padding-top: 32px;
}
.blockTwo-imgTopQuotes{
  grid-column: 2/3;
  grid-row: 1/2;
  width: 23px;
  height: 23px;
}
.blockTwo-text{
  grid-column: 2/3;
  grid-row: 2/3;
  font-family: Yeseva One;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  margin: 0 20px 0 20px;
}
.blockTwo-containerImgBottomQuotes{
  grid-column: 2/3;
  grid-row: 3/4;
  width: 100%;
  height: 23px;
  display: flex;
  justify-content: flex-end;
}
.blockTwo-imgBottomQuotes{
  width: 23px;
  height: 23px;
}
</style>