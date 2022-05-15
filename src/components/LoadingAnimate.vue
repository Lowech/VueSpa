<script >
export default {
  mounted(){
    this.visibleElement();
  },
  methods:{
    visibleElement(){
     
       for( this.it=11; this.it>=0; --this.it){
    
           this.clickColor(this.it);
       }
    },
     clickColor(it){
        setTimeout(()=>{
          document.querySelectorAll("circle")[it].classList.add("circle");
    }, 100* it)
        
    }
  }
}

</script>
<template>
    <div class="progressBar">
        <div class="progressBar-state"></div>
    </div>
    <p class="textHeader">обработка результатов</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="100" fill="currentColor">

      <circle cx="120" cy="26" r="12" fill="#3BDE7C"/>
      <circle cx="145" cy="12" r="11" fill="#3BDE7C"/>
      <circle cx="171" cy="17" r="10" fill="#3BDE7C"/>
      <circle cx="187" cy="35" r="9" fill="#3BDE7C"/>
      <circle cx="191" cy="55" r="8" fill="#3BDE7C"/>
      <circle cx="185" cy="75" r="7" fill="#3BDE7C"/>
      <circle cx="170" cy="90" r="6" fill="#3BDE7C"/>
      <circle cx="150" cy="95" r="5" fill="#3BDE7C"/>
      <circle cx="130" cy="90" r="4" fill="#3BDE7C"/>
      <circle cx="115" cy="80" r="3" fill="#3BDE7C"/>
      <circle cx="105" cy="65" r="2" fill="#3BDE7C"/>
      <circle  cx="105" cy="45" r="1" fill="#3BDE7C"/>
   
  </svg>
  <p class="textFooter">Определение стиля мышления...... ............................................................</p>
</template>

<style>

.circle {
  animation: bounce-in 0.6s infinite;
  animation-direction: alternate;
  
}
@keyframes bounce-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.progressBar{
  width: 260px;
  height: 11px;
  background: rgba(242, 243, 243, 0.5);
  mix-blend-mode: normal;
  border-radius: 10.5px;
  margin-top: 17px;
  margin-bottom: 49px;
}
.progressBar-state{
  height: 11px;
  background: #3BDE7C;
  border-radius: 10.5px;
  width: 260px;
}
.textHeader{
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-bottom: 33px;
}
.textFooter{
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFFFFF;
  text-align: center;
  margin-top: 27px;
}

</style>