<template>
  <div>
    <h1 class="title" align = "center">Search Page</h1>
    <div class="container">
      <div class="left-half">
        <h2 class="title" align = "center">Search Team</h2>
        <div>
          <b-input-group id="search-input">
            <b-form-input v-model="searchTeam"></b-form-input>
            <b-input-group-append>
              <b-button variant="success" @click="findSearchTeam">Search</b-button>
            </b-input-group-append>
          </b-input-group>
          <br/>
          <br/>
        </div>
        <div class="content">
          <b-carousel
                id="carousel-1"
                v-model="slide"
                v-if="searchTeamClicked"
                :interval="10000"
                controls
                indicators
                background="grey"
                img-width="900"
                img-height="480"
                style="text-shadow: 1px 1px 2px #555;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
                >
                  <b-carousel-slide v-for="(team, index) in teams" img-blank :key="index">
                          <TeamPreview  :team_name="team.team_name"  
                          :teamImageURL="team.logo"
                          :key="team.team_id"></TeamPreview>
                  </b-carousel-slide>
          </b-carousel>
          <span v-if="searchTeamClicked && teams.length>0" class="mt-4"> found: {{ this.teams.length }} results<br></span>
          <span v-else-if="searchTeamClicked && teams.length==0" class="mt-4"> No teams found<br></span>
        </div>
      </div>
      <div class="right-half">
        <h2 class="title" align = "center">Search Player</h2>
        <div>
          <b-input-group id="search-input">
            <b-form-input v-model="searchPlayer"></b-form-input>
          </b-input-group>
          <br/>
          <div>
            <h5 class="title" >Filter By: (OPTIONAL)</h5>
            <!-- Using modifiers -->
            <b-button @click="showDropDown" v-b-toggle.collapse-2 class="m-1">Position</b-button>

            <!-- Using value -->
            <b-button @click="showTextTeam" v-b-toggle="'collapse-2'" class="m-1">Name of team</b-button>

            <!-- Element to collapse -->
            <b-collapse id="collapse-2">
              <b-card v-if="showDropDownPos===true" class="background-search">
                <b-dropdown dropright size="sm" :text="buttonTitle" split-class="m-2">
                  <b-dropdown-item @click="buttonTitle = i " v-for="i in 11" :key="i">{{ i }}</b-dropdown-item>
                </b-dropdown>
                <span>Selected: {{ buttonTitle }}</span>
              </b-card>
              <b-card v-else-if="showText===true" class="background-search">
                <b-form-input v-model="textTeam"></b-form-input>
                <span>Selected: {{ textTeam }}</span>

              </b-card>
            </b-collapse>
          </div>
          <br>
          <br>
          <br>
          <div>
            <b-button align= "center" variant="success" @click="findSearchPlayer">Search</b-button>
          </div>
          <br>
          <br>
          <div class="content">
            <b-carousel
                  id="carousel-2"
                  v-model="slide"
                  v-if="searchPlayerClicked && players.length>0"
                  :interval="10000"
                  controls
                  indicators
                  background="grey"
                  img-width="900"
                  img-height="600"
                  style="text-shadow: 1px 1px 2px #555;"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                  >
                    <b-carousel-slide v-for="(player, index) in players" img-blank :key="index">
                            <PlayerPreview :id="player.id" 
                              :team_name="player.team_name" 
                              :name="player.name" 
                              :position="player.position" 
                              :imageURL="player.image" 
                              :key="player.id">
                            </PlayerPreview>
                    </b-carousel-slide>
            </b-carousel>
            <span v-if="searchPlayerClicked && players.length>0" class="mt-4"> found: {{ this.players.length }} results<br></span>
            <span v-else-if="searchPlayerClicked && players.length==0" class="mt-4"> No players found<br></span>
          
         </div>
          <!-- Your search Query: {{ searchPlayer }} -->
        </div>
      <!-- <LoginPage v-if="!$root.store.username" to="/login" tag="button"></LoginPage> -->
      <!-- <FavoriteGames v-else></FavoriteGames> -->
      </div>  
    </div>
  </div>
</template>

<script>
import TeamPreview from '../components/TeamPreview'
import PlayerPreview from '../components/PlayerPreview'
export default {
  components: {
    TeamPreview,
    PlayerPreview,
  },
  data() {
    return {
      //details for the PlayerSearch
      players: [],
      textTeam: "",
      searchPlayer: "",
      // searchTeamByPlayer:"",
      showDropDownPos: true, //showDropDownPos and showText are check if one of the filters is on
      showText: true,
      searchTeamClicked: false, /// hide/show the answers of the other search (there is a team search and a player search)
      searchPlayerClicked: false, /// hide/show the answers of the other search (there is a team search and a player search)
      buttonTitle: "optional",
      
      //details for the TeamSearch
      searchTeam: "",
      teams: [],
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
    async showDropDown(){
      this.showDropDownPos = true;
      this.showText = false;
      this.textTeam = "";
    },
    async showTextTeam(){
      this.buttonTitle = "optional";
      this.showDropDownPos = false;
      this.showText = true;
    },
    async findSearchTeam(){
      console.log(this.searchTeam);
      if(this.searchTeam!= ""){
        try {
          const response = await this.axios.get(
            `http://localhost:3000/search/searchTeamByName/${this.searchTeam}`,
          );
          if(response.data.status == 204)
            this.teams = [];           
          else
            this.teams = response.data;

          console.log(response);
          this.searchTeamClicked = true;
          this.searchPlayerClicked = false;
        } catch (error) {
          console.log("error in teamView")
          console.log(error);
        }
      }
      else{
        alert("Please insert name of team!")
      }
    },
    async findSearchPlayer(){
      console.log(this.searchPlayer);
      console.log(this.textTeam);
      console.log(this.buttonTitle);
      if(this.searchPlayer!= ""){
        try{
            if(this.buttonTitle === "optional" && this.textTeam ===""){
              var response = await this.axios.get(
              `http://localhost:3000/search/searchPlayerByName/${this.searchPlayer}`,
              );
            }
            else if (this.buttonTitle != "optional" && this.textTeam === ""){
              var response = await this.axios.get(
              `http://localhost:3000/search/searchPlayerByNameAndByPosition/player_name/${this.searchPlayer}/position_id/${this.buttonTitle}`,
              );
            }
            else if (this.buttonTitle === "optional" && this.textTeam != ""){
              var response = await this.axios.get(
              `http://localhost:3000/search/searchPlayerByNameAndByTeam/player_name/${this.searchPlayer}/team_name/${this.textTeam}`,
              );
                
            }
            console.log(response);

            if(response.data.status == 204)
              this.players = [];           
            else
              this.players = response.data;

            this.searchPlayerClicked = true;
            this.searchTeamClicked = false;
        } catch(error){
          console.log("error in PlayerView")
          console.log(error);  
        }
      }
      else{
        alert("Please insert name of player!")
      } 
    }
  },
}

</script>

<style scoped>

#search-input {
  margin-left: 20px; 
  width: 500px; 
  /* border: 100px; */
}
/* Pattern styles */
.left-half {
  float: left;
  width: 50%;
}
.right-half {
  float: left;
  width: 50%;
}

.content {
  height: 800px;
  width: 100%;
}

.background-search{
  background-color: grey;
}

.carousel-1 {
    border-radius: 55px 55px 55px 55px;
    overflow: hidden;
    height: 900;
    width: 480;
    margin-bottom: 60px;
    margin-top: 40px;
    margin-left: 200px;
    margin-right: 200px;
}

.carousel-2 {
    border-radius: 55px 55px 55px 55px;
    overflow: hidden;
    height: 2000;
    width: 480;
    margin-bottom: 60px;
    margin-top: 40px;
    margin-left: 200px;
    margin-right: 200px;
}

b-carousel-slid {
    border-radius: 55px 55px 55px 55px;
}
</style>