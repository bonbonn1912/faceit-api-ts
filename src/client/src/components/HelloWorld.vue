<template>
  <div @click="fetchData" class="hell">
    Fetch Data<button class="test">

    </button>
  </div>
</template>

<script>
var axios = require('axios');

export default {
  name: 'HelloWorld',
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
