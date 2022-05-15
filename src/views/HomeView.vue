<script >
import { RouterLink, RouterView } from 'vue-router'
import HomeBlockOne from '../components/HomeBlockOne.vue'
import HomeBlockTwo from '../components/HomeBlockTwo.vue'
import HomeBlockThree from '../components/HomeBlockThree.vue'
import HomeBlockFourth from '../components/HomeBlockFourth.vue'
export default {
  name: 'HomeView',
  data () {
    return {
      picked: '',
      start: true,  
    } 
  },
  components:{
    HomeBlockOne,
    HomeBlockTwo,
    HomeBlockThree,
    HomeBlockFourth
  },
  methods:{
    idElement(e){
      this.idOption=e.target.id;
    }
  }
}
</script>

<template>
  <main class="homePage">
  <HomeBlockOne/>
   <HomeBlockTwo/>
    <HomeBlockThree/>
     <HomeBlockFourth/>
  </main>
</template>

<style>
.homePage{
  width: 100%;
  height: 100%;
}

</style>