<template>
  <div class="container">
   <div>
        <WeeklyMatches></WeeklyMatches>
        <TeamPreview
            :team_id=85
            :team_name='"København"' 
            :teamImageURL="imageURL3" >
          </TeamPreview>
        <!-- <PlayerPreview
            :id=172104
            :name='"James Forrest"' 
            :team_name='"Celtic"' 
            :position=3
            :imageURL="imageURL">
        </PlayerPreview>
        <PlayerPreview
            :id=5555
            :name='"Mika Väyrynen"' 
            :team_name='"Klubi-04"' 
            :position=9
            :imageURL="imageURL2">
        </PlayerPreview> -->
    </div>

  </div>
</template>

<script>
// import PlayerPreview from '../components/PlayerPreview';
import TeamPreview from '../components/TeamPreview';

import WeeklyMatches from "../components/WeeklyMatches";
export default {
  components: {
    TeamPreview,
    WeeklyMatches,
    // PlayerPreview
  },
  name: "weekly_matches",
  data() {
    return {
      imageURL: "",
      imageURL2: "",
      imageURL3: "",
    };
  },
  methods: {
    getImage(){
        // URL url = new URL("https://cdn.sportmonks.com/images/soccer/placeholder.png");
        // Bitmap bmp = BitmapFactory.decodeStream(url.openConnection().getInputStream());
        // imageView.setImageBitmap(bmp);
        this.imageURL = "https://cdn.sportmonks.com/images/soccer/players/8/172104.png";////player1
        this.imageURL2 = "https://cdn.sportmonks.com/images/soccer/players/19/5555.png";///player2

      this.imageURL3 = "https://cdn.sportmonks.com/images//soccer/teams/21/85.png";

        // console.log(this.imageURL);
        // aa = new image("https://cdn.sportmonks.com/images/soccer/placeholder.png");
        // this.image_new = aa;
    },
  },
  mounted(){
    // console.log(" images");
    this.getImage(); 
  }
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 400px;
}
</style>
