<template>
  <div class="container">
    <!-- <h2> {{ myName }} !!</h2>
    <h2>{{ myName2 }}!!</h2> -->
    <h2> {{ myName3 }}!!</h2>
    <h1 class="title" align = "center">Main Page</h1>
      <div class="left-half">
        <LeagueInfo></LeagueInfo>
      </div>
      <div class="right-half">
        <div v-if="!$root.store.username" to="/login">
          <LoginPage></LoginPage>
        </div>
        <div v-else>
          <FavoriteGames></FavoriteGames>
        </div>
      </div>
   
  </div>
</template>

<script>
import LeagueInfo from "../components/LeagueInfo";
import FavoriteGames from "../components/FavoriteGames";
import LoginPage from "../pages/LoginPage";
export default {
  components: {
    LeagueInfo, 
    LoginPage, 
    FavoriteGames,
  },
  data() {
    return {
      // myName: this.$root,
      // myName2: $root.store,
      myName3: this.$root.store.username,
      favoriteMatches: {},
    };
  },
};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}


/* Pen-specific styles */
* {
  box-sizing: border-box;
}
html, body, section, div {
  height: 100%;
}

body { 
  color: #fff;
  font-family: sans-serif;
  font-size: 1.25rem;
  line-height: 150%;
  text-align: center;
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

</style>
