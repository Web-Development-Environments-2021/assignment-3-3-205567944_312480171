<template>
    <div>
        <b-card>      
            <b-card-text>   
                <ul>
                    <div>
                        <router-link :to="{ name: 'player_page_by_id', params: { id: id } }"><img :src=imageURL> </router-link>
                    </div>
                    <div>
                        <router-link :to="{ name: 'player_page_by_id', params: { id: id } }"><b>Full Name:</b> {{ name }}</router-link>
                    </div>
                    <li> Player ID: {{ id }}</li>
                    <li> Team: {{ team_name }}</li>
                    <li> Position: {{ position }}</li>
                </ul>
            </b-card-text>
        </b-card>
    </div>
  <!-- <div class="player-preview">
    <div class="player-title">
      <b>Full Name:</b> {{ name }}
    </div>
    <ul class="player-content">
      <li> Team: {{ team_name }}</li>
      <li> Position: {{ position }}</li>
          <router-link to="/player_page"><img-src="https://picsum.photos/600/300/?image=25" align="center">
          </router-link>
    </ul>
  </div> -->
</template>

<script>
export default {
  name: "PlayerPreview",

  props: {
      id: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      team_name: {
        type: String,
        required: true
      },
      position: {
        type: Number,
        required: true
      },
      imageURL: {
        type: String
      }  
  }, 
  mounted(){
    console.log("player preview mounted")
  } 
};
</script>

<style>
/* .player-preview {
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

.player-preview .player-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 197, 157);
}

.player-preview .player-content {
  width: 100%;
  overflow: hidden;
} */

</style>
