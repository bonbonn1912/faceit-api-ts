<template>
  <div class="rahmen bg-gray-600 w-screen h-screen flex felx-row">
    <div class="LeftHalf w-1/2 h-full bg-gray-600 flex flex-col justify-center items-center">
      <div class="titel flex w-1/2 font-bold text-lg text-white">Last 8 Requests</div>
      <div class="last10 w-1/2 h-3/4 bg-gray-700 overflow-auto rounded-xl py-2">
           <PlayerCheck v-for="entry in last10" v-bind:key="entry" :data="entry" />
      </div>
    
    </div>
     <div class="RightHalf w-1/2 h-full bg-gray-600 flex flex-col justify-center items-center">
      <div class="titel flex w-3/4 font-bold text-lg text-white items-center align-middle">Last 6 Matches</div>
      <div class="last10 w-3/4 h-3/4 bg-gray-700 overflow-auto rounded-xl py-4">
           <MatchRoom v-for="match in last5" v-bind:key="match" :data="match"/>
      </div>
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
import MatchRoom from '../components/Matches'
var axios = require('axios');

export default {
  name: 'LandingPage',
  props: {
    msg: String
  },
  components: {
    PlayerCheck,
    MatchRoom
  },
  data(){
    return  {
      last10: [],
      last5: [],
    }
  },
  mounted(){
    this.fetchPlayerData();
    this.fetchMatchData();
  },
  methods: {
    fetchPlayerData(){
      axios.get('/internal/api/getLastPlayers')
      .then(response => {
        response.data.forEach((entry) =>{
          if(entry.player.avatar == ""){
            entry.player.avatar = "https://i.imgur.com/goxT1jr.png";
          }
          this.last10.push(entry);
        })
      })
      .catch(error => {
        console.log(error);
      });
    },
    fetchMatchData(){
      axios.get('/internal/api/getLastMatches')
      .then(response => {
        response.data.forEach((entry) =>{
         
          if(entry.match.logo_urls[0] == ''){
            entry.match.logo_urls[0] = "https://i.imgur.com/goxT1jr.png";
          }
          if(entry.match.logo_urls[1] == ''){
            entry.match.logo_urls[1] = "https://i.imgur.com/goxT1jr.png";
          }
          this.last5.push(entry);
  
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
