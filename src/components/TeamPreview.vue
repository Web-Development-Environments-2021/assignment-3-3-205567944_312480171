<template>
    <div>
        <b-card>      
            <b-card-text>   
                <ul class="player-content">
                    <div>
                        <router-link :to="{ name: 'team_page_by_id', params: { id: team_id } }"><img :src=teamImageURL> </router-link>
                    </div>
                    <div>
                        <router-link :to="{ name: 'team_page_by_id', params: { id: team_id } }"><b>Team Name:</b> {{ team_name }}</router-link>
                    </div>
                </ul>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
export default {
  name: "TeamPreview", 
  props: {
      team_id: {
        type: Number,
        required: true  
      },
      team_name: {
        type: String,
        required: true
      },
      teamImageURL: {
        type: String
      },  
  }, 
  mounted(){
    console.log("team preview mounted")
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
