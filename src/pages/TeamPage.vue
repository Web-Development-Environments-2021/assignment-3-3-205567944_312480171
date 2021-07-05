<template>
<div>
    <div>
        <b-card>      
            <b-card-text> 
                 <div align="center">
                    <TeamPreview :team_name="team_name"  
                                :teamImageURL="teamImageURL"
                                :key="team_id"></TeamPreview>
                </div>
                <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="grey"
                img-width="1800"
                img-height="480"
                style="text-shadow: 1px 1px 2px #555;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
                >
                <!-- Text slides with image -->
                    <b-carousel-slide v-for="(player, index) in players" img-blank :key="index">
                        <template>
                            <PlayerPreview 
                            :id="player.id" 
                            :name="player.name" 
                            :team_name="player.team_name" 
                            :position="player.position" 
                            :imageURL="player.image"
                            :key="player.playerId">
                            </PlayerPreview>
                        </template>
                    </b-carousel-slide>

                </b-carousel>

                <p class="mt-4">
                Slide #: {{ slide }}<br>
                </p>
            </b-card-text>
        </b-card>
    </div>
    <div >
    <h3 align = "center"> Past Matches</h3>
    <b-table :items="past_matches" :fields="fields_past" striped responsive="sm">
      <template #cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Events
        </b-button>
      </template>

      <template v-slot:row-details="row">
        <b-card>
          <b-table :items="row.item.events" :fields="fields_events" striped responsive="sm">
            <b-button size="sm" @click="row.toggleDetails">Hide Events</b-button>
          </b-table>
        </b-card>
      </template>
    </b-table>
   </div>


   <div>
    <h3 align = "center"> Future Matches</h3>
    <b-table :items="future_matches" :fields="fields_future" striped responsive="sm">
      <template #cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Events
        </b-button>
      </template>


    </b-table>
   </div>
</div>
    <!-- <div>
        <b-card>      
            <b-card-text>   
                <ul class="player-content">
                    <div>
                        <router-link :to="{ name: 'team_page_by_id', params: { id: team_id } }"><img :src=teamImageURL> </router-link>
                    </div>
                    <div>
                        <router-link :to="{ name: 'team_page_by_id', params: { id: team_id } }"><b>Team Name:</b> {{ team_name }}</router-link>
                    </div>
                    <li> <PlayerPreview
                            v-for="g in players"
                            :id="g.id" 
                            :name="g.name" 
                            :team_name="g.team_name" 
                            :position="g.position" 
                            :imageURL="g.image" 
                            :key="g.id">
                        </PlayerPreview>
                    </li>
                </ul>
            </b-card-text>
        </b-card>
        <div>
    <h3 align = "center"> Past Matches</h3>
    <b-table :items="past_matches" :fields="fields_past" striped responsive="sm">
      <template #cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Events
        </b-button>
      </template>

      <template v-slot:row-details="row">
        <b-card>
          <b-table :items="row.item.events" :fields="fields_events" striped responsive="sm">
            <b-button size="sm" @click="row.toggleDetails">Hide Events</b-button>
          </b-table>
        </b-card>
      </template>
    </b-table>
   </div>


   <div>
    <h3 align = "center"> Future Matches</h3>
    <b-table :items="future_matches" :fields="fields_future" striped responsive="sm">
      <template #cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Events
        </b-button>
      </template>


    </b-table>
   </div>
    </div> -->
</template>

<script>
import PlayerPreview from '../components/PlayerPreview'
import TeamPreview from '../components/TeamPreview'
export default {
  name: "team_page_by_id",
   components: {
    // 'carousel': VueCarousel.Carousel,
    // 'slide': VueCarousel.Slide,
    PlayerPreview,
    TeamPreview
  }, 
  data() {
    return {
        team_id: 0,
        teamImageURL: "",
        team_name: "",
        players: [],
        past_matches: [],
        future_matches: [],

        fields_past: ['match_id', 'local_team', 'visitor_team', 'date_game', 'hour', 'venue', 'result', 'show_details'],
        fields_future: ['match_id', 'local_team', 'visitor_team', 'date_game', 'hour', 'venue'],
        fields_events: ['minute', 'description','hour'],
        // items_past :[],
        // items_future:[]

        slide: 0,
        sliding: null,
        
    };
  },
  methods: {
    onSlideStart(slide) {
        this.sliding = true
    },
    onSlideEnd(slide) {
        this.sliding = false
    },
    async teamDetails(){
      console.log("teamPreview");
      try {
        const response = await this.axios.get(
          `http://localhost:3000/teams/teamFullDetails/${this.$route.params.id}`,
        );
        console.log(response.data);
        this.team_id = response.data[0].id;
        this.teamImageURL = response.data[0].logo_path;
        this.team_name = response.data[0].name;
        this.players = [];
        this.past_matches = [];
        this.future_matches = [];
        this.players = response.data[1];
        this.past_matches = response.data[3];
        this.past_matches._showDetails = true;
        this.future_matches = response.data[2];
        // this.matches = [];
        // this.matches.push(...games);
        // console.log(response);
      } catch (error) {
        console.log("error in teamView")
        console.log(error);
      }
    },
  }, 
  mounted(){
    console.log("team view mounted");
    this.teamDetails(); 
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

.row{
  margin-top:100px;
}

</style>
