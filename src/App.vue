<template >
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand :to="{ name: 'main' }">Superliga Vue</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        <b-nav-item :to="{ name: 'search' }">Search</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
        <b-nav-item :to="{ name: 'weekly_matches' }">Weekly Matches</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
        <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
        </b-navbar-nav>
        <span class="ml-auto" v-if="!$root.store.username" >
        Hi Guest
        <router-link :to="{ name: 'register' }">Register</router-link>|
        <router-link :to="{ name: 'login' }">Login</router-link>|
      </span>
      <span class="ml-auto" v-else >
        Hi {{ $root.store.username }}
        <b-dropdown id="dropdown-1" text="Personal Zone" style="color : black" >
          <b-dropdown-item
            ><router-link :to="{ name: 'favoriteMatches' }"
              >My Matches</router-link
            ></b-dropdown-item>
          <b-dropdown-item disabled=true
            ><router-link :to="{ name: 'favoritePlayers' }"
              >My Players</router-link
            ></b-dropdown-item>
          <b-dropdown-item disabled=true
            ><router-link :to="{ name: 'favoriteTeams' }"
              >My Teams</router-link
            ></b-dropdown-item> 
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item
            ><button @click="Logout">Logout</button></b-dropdown-item>
        </b-dropdown>
      </span>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

.h {
  background-size: cover;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:black;
  min-height: 100vh;
  // background-image: url('../src/assets/background1.jpg');
  background-size: cover;
}


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color:black;

}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
