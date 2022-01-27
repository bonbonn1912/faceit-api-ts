<template>
  <div class="rahmen bg-gray-600 w-screen h-screen flex felx-col justify-center">
    Landing Page
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
var axios = require('axios');

export default {
  name: 'LandingPage',
  props: {
    msg: String
  },
  data(){
    
  },
  methods: {
    fetchData(){
      axios.get('/internal/api/getallcurrentgames')
      .then(response => {
        console.log(response);
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
