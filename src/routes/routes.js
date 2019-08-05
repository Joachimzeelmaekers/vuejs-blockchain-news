import Actors from "../components/Actors.vue";
import NewsOverview from "../components/NewsOverview.vue";

const routes = [
  { path: "/", component: NewsOverview },
  { path: "/:id/actors", component: Actors }
];

export default routes;
