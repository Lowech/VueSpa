<template>
  <main class="infoTest">
    <div class="infoTest-block">
      <p class="infoTest-text">вы еще не прошли тест!</p>
    </div>
  </main>
</template>

<style scoped>
.infoTest {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url("./src/assets/rain_bk2.png")  no-repeat;
  background-size: cover ;
}
.infoTest-bloc{
  width: auto;
  height: auto;
  background: transparent;
}
.infoTest-text{
  font-family: PT Serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  text-transform: uppercase;
  
}

</style>