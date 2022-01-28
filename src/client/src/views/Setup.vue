<template>
  <div
    class="about w-screen h-screen bg-gray-600 text-white flex flex-col text-center items-center"
  >
    <h1 class="text-4xl py-2">Custom Faceit REST API (TS) v 1.0.0</h1>
    <h2 class="text-xl py-6">
      xXFrontendDevMlgXx dont know how to center divs
    </h2>
    <div class="getTable flex flex-col py-5 text-left">
      <div class="tables flex flex-row">
        <div class="table1">
          <p class="font-bold">GET</p>
          <table class="table-fixed border text-center">
            <thead class="border bg-gray-400 text-black">
              <tr>
                <th>Path</th>
                <th>Username</th>
                <th>Limit</th>
                <th>Key</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border">
                <td class="text-left">/elo</td>
                <td>required</td>
                <td>❌</td>
                <td>❌</td>
              </tr>
              <tr class="border">
                <td class="text-left">/checkelo</td>
                <td>required</td>
                <td>❌</td>
                <td>❌</td>
              </tr>
              <tr class="border">
                <td lass="text-left">/matchhistory</td>
                <td>required</td>
                <td>required</td>
                <td>❌</td>
              </tr>
              <tr>
                <td class="text-left">/getmatch</td>
                <td>❌</td>
                <td>❌</td>
                <td>required</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table2">
          <p class="mx-10 font-bold">POST</p>
          <table class="table-fixed border text-center mx-10">
            <thead class="border bg-gray-400 text-black">
              <tr>
                <th>Path</th>
                <th>Header</th>
                <th>Value</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border">
                <td class="text-left px-5">/match</td>
                <td class="px-2">Authorization</td>
                <td class="px-2">player_id</td>
                <td class="px-2">Faceit Webhook Data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="example py-10 flex flex-col">
       <p class="font-bold text-xl">Examples</p>
       <a href="/elo?username=BonBonn-_-"> Elo </a>
        <a href="/elo?username=BonBonn-_-"> Check Elo </a>
         <a href="/elo?username=BonBonn-_-"> Match History </a>
      </div>
    </div>
  </div>
  <div
    class="navbar w-full h-8 text-white font-bold text-xl fixed bottom-0 bg-gray-700 flex items-center justify-center"
  >
    <router-link to="/">Home</router-link>
  </div>
</template>
<script>
export default {
  name: "Setup",
};
</script>
