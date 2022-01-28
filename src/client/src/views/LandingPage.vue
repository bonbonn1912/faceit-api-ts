<template>
  <div class="rahmen bg-gray-600 w-screen h-screen flex felx-row">
    <div class="LeftHalf w-1/2 h-full bg-gray-600 flex flex-col justify-center items-center">
      <div class="titel flex w-1/2 font-bold text-lg text-white">Last 10 Requests</div>
      <div class="last10 w-1/2 h-4/5 bg-gray-700 overflow-auto rounded-xl">
           <PlayerCheck v-for="entry in last10" v-bind:key="entry" :data="entry" />
      </div>
    
    </div>
     <div class="RightHalf w-1/2 h-full bg-gray-600">
    </div>
    <div class="navbar w-full h-8 text-white font-bold text-xl fixed bottom-0 bg-gray-700 flex items-center justify-center">
      <router-link to="/setup">Setup</router-link>
    </div>
    
  </div>

 <!-- <div @click="fetchData" class="hell">
    Fetch Data<button class="test">

    </button>
  </div> -->
</template>

<script>
import PlayerCheck from '../components/PlayerCheck'
var axios = require('axios');

export default {
  name: 'LandingPage',
  props: {
    msg: String
  },
  components: {
    PlayerCheck
  },
  data(){
    return  {
      last10: [],
    }
  },
  mounted(){
    this.fetchData();
  },
  methods: {
    fetchData(){
      axios.get('/internal/api/getallcurrentgames')
      .then(response => {
        response.data.forEach((entry) =>{
          this.last10.push(entry);
          console.log(entry);
        })
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
