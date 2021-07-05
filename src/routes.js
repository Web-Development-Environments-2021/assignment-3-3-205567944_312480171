import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage")
  },
  {
    path: "/user/favoriteTeams",
    name: "favoriteTeams",
    component: () => import("./pages/FavoriteTeamsPage")
  },
  {
    path: "/user/favoriteMatches",
    name: "favoriteMatches",
    component: () => import("./pages/FavoriteMatchesPage")
  },
  {
    path: "/user/favoritePlayers",
    name: "favoritePlayers",
    component: () => import("./pages/FavoritePlayersPage")
  },
  {
    path: "/about",
    name: "about",
    component: ()=> import("./pages/AboutPage")
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage")
  },
  {
    path: "/weekly_matches",
    name: "weekly_matches",
    component: () => import("./pages/WeeklyMatchesPage")
  },
  {
    path: "/player_page/:id",
    name: "player_page_by_id",
    component: () => import("./pages/PlayerPage")
  },
  {
    path: "/player_page",
    name: "player_page",
    component: () => import("./pages/PlayerPage")
  },
  {
    path: "/team_page/:id",
    name: "team_page_by_id",
    component: () => import("./pages/TeamPage")
  },
  {
    path: "/team_page",
    name: "team_page",
    component: () => import("./pages/TeamPage")
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound
  }
];

export default routes;
