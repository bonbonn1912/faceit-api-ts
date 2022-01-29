<template>
  <div
    class="frame bg-gray-700 border-2 rounded-xl flex my-4 px-2 mx-2 items-center"
  >
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
    getMap(map) {
      switch (map) {
        case "de_mirage":
          return "https://cdn.faceit.com/static/stats_assets/csgo/maps/110x55/csgo-votable-maps-de_mirage-110x55.jpg";
        case "de_cache":
          return "https://cdn.faceit.com/static/stats_assets/csgo/maps/110x55/csgo-votable-maps-de_cache-110x55.jpg";
        case "de_overpass":
          return "https://cdn.faceit.com/static/stats_assets/csgo/maps/110x55/csgo-votable-maps-de_overpass-110x55.jpg";
        case "de_train":
          return "https://cdn.faceit.com/static/stats_assets/csgo/maps/110x55/csgo-votable-maps-de_train-110x55.jpg";
        case "de_dust2":
          return "https://cdn.faceit.com/static/stats_assets/csgo/maps/110x55/csgo-votable-maps-de_dust2-110x55.jpg";
        case "de_inferno":
          return "https://cdn.faceit.com/static/stats_assets/csgo/maps/110x55/csgo-votable-maps-de_inferno-110x55.jpg";
        case "de_nuke":
          return "https://cdn.faceit.com/static/stats_assets/csgo/maps/110x55/csgo-votable-maps-de_nuke-110x55.jpg";
        case "de_cbble":
          return "https://cdn.faceit.com/static/stats_assets/csgo/maps/110x55/csgo-votable-maps-de_cbble-110x55.jpg";
        case "de_ancient":
          return "https://cdn.faceit.com/static/stats_assets/csgo/maps/110x55/csgo-votable-maps-de_ancient-110x55.jpg";
        case "de_vertigo":
          return "https://cdn.faceit.com/static/stats_assets/csgo/maps/110x55/csgo-votable-maps-de_vertigo-110x55.jpg";
      }
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
