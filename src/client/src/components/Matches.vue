<template>
<a :href="getImageUrl(data.match_id)"> 
  <div
    class="frame bg-gray-700 border-2 rounded-xl flex my-4 px-2 mx-2 items-center">
    <div class="image">
      <img :src="getMap(data.match.map[0])" class="my-1 h-20 rounded-xl" />
    </div>
    <div class="info flex text-white w-full items-center justify-center">
      <img
        :src="data.match.logo_urls[0]"
        class="mx-2 w-16 h-16 my-1 rounded-2xl"
      />
      {{ data.match.teams[0] }} ({{ data.match.avgElos[0] }}) vs.
      {{ data.match.teams[1] }}({{ data.match.avgElos[1] }})<img
        :src="data.match.logo_urls[1]"
        class="mx-2 w-16 h-16 my-1 rounded-2xl"
      />
    </div>
  </div>
</a>
</template>
<script>
export default {
  name: "MatchRoom",
  props: {
    data: {
      type: Object,
      required: false,
    },
  },
  methods: {
      getImageUrl(id){
          console.log(id);
        return `https://www.faceit.com/en/csgo/room/${id}`
      },
    getMap(map) {
          return `https://cdn.faceit.com/static/stats_assets/csgo/maps/110x55/csgo-votable-maps-${map}-110x55.jpg`;
    },
    getTime(timestamp) {
      var date = new Date(timestamp * 1000);
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var time =
        day + "/" + month + "/" + year + " " + hours + ":" + minutes.substr(-2);
      return time;
    },
  },
};
</script>
