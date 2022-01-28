<template>
<div class="frame bg-gray-700 border-2 rounded-xl flex my-2 px-2 mx-2 items-center">
  <div class="image">
    <a :href="data.player.url">
 <img :src="data.player.avatar" class="object-fill h-20 w-20 my-1 rounded-2xl"/>
    </a>
 </div>
 <div class="info flex flex-col px-2 text-white font-thin"> <p> Username: {{ data.player.username}}  </p> <p> Elo: {{ data.player.elo}}  </p> <p>Time: {{getTime(data.timestamp._seconds)}} </p>
 </div>
 
  
  </div>
</template>
<script>
export default {
  name: "PlayerCheck",
  props: {
    data : {
      type: Object,
      required: false
    }
  },
   methods : {
    getTime(timestamp){
      var date = new Date(timestamp * 1000);
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var time = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes.substr(-2);
      return time;
    }
  }
};
</script>
