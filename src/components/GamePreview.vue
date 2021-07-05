<template>
  <div class="game-preview">
    <div class="game-title">
      <b>Game Id:</b> {{ match_id }}
    </div>
    <ul class="game-content">
      <li> host: {{ hostTeam }}</li>
      <li> guest: {{ awayTeam }}</li>
      <li> date: {{ date_match_new }}</li>
      <li> time: {{ hour }}</li>
      <li> venue: {{ venue }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GamePreview",
  props: {
      match_id: {
        type: Number,
        required: true
      },
      hostTeam: {
        type: String,
        required: true
      },
      awayTeam: {
        type: String,
        required: true
      },
      date_match_new: {
        type: String,
        required: true
      },
      hour: {
        type: String,
        required: true
      },
      venue: {
        type: String,
        required: true
      }
  }, 
  mounted(){
    console.log("game preview mounted")
  } 
};
</script>

<style>
.game-preview {
  display: inline-block;
  width: 250px;
  height: 200px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:cadetblue;
}

.game-preview .game-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 197, 157);
}

.game-preview .game-content {
  width: 100%;
  overflow: hidden;
}



</style>
