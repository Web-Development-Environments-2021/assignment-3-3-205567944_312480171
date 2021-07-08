<template>
  <div>
    <GamePreview
      v-for="g in matches"
      :match_id="g.match_id" 
      :hostTeam="g.local_team" 
      :awayTeam="g.visitor_Team" 
      :date_match_new="g.date_game" 
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
      matches: [],
    };
  },
  created() {
    console.log("favorite updateMatches mounted");
    this.updateMatches();   
  },
  methods: {
    async updateMatches(){
      console.log("response");
      try {
        console.log("here");
        console.log(this.$root.store);
        console.log(this.$root.store.BASE_URL + "/users/favoriteMatchesTop3");
        const response = await this.axios.get(
          this.$root.store.BASE_URL + "/users/favoriteMatchesTop3",
        );
        console.log(response);
        console.log(response.data);
        const games = response.data;
        this.matches = [];
        this.matches.push(...games);
        console.log(response);
      } catch (error) {
        console.log("error in update updateMatches")
        console.log(error);
      }
    },
  }, 
};
</script>

<style></style>
