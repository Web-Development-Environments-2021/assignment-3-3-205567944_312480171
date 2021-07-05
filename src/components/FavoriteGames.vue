<template>
  <div>
    <GamePreview
      v-for="g in matches"
      :match_id="g.match_id" 
      :hostTeam="g.hostTeam" 
      :awayTeam="g.awayTeam" 
      :date_match_new="g.date_match_new" 
      :hour="g.hour" 
      :venue="g.venue_name"
      :key="g.match_id"></GamePreview>
  </div>
</template>

<script>
import GamePreview from "./GamePreview.vue";
export default {
  name: "FavoriteGames",
  components: {
    GamePreview
  }, 
  data() {
    return {
      matches: this.matches
    };
  },
  methods: {
    async updateMatches(){
      console.log("response");
      try {
        const response = await this.axios.get(
          "http://localhost:3000/users/favoriteMatchesTop3",
        );
        console.log(response);
        console.log(response.data);
        const games = response.data.matches;
        this.matches = [];
        this.matches.push(...games);
        console.log(response);
      } catch (error) {
        console.log("error in update updateMatches")
        console.log(error);
      }
    }
  }, 
  mounted(){
    console.log("favorite updateMatches mounted");
    this.updateMatches(); 
  }
};
</script>

<style></style>
