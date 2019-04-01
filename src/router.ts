import Router, { RouteConfig } from "vue-router";
import { PodcastsList } from "./pages";
import { PodcastDetail } from "./pages/podcast-detail";

const moduleRoutes = {
  list: "/",
  podcastDetail: "/podcast/:id"
};

const routes: RouteConfig[] = [
  { path: moduleRoutes.list, name: "List", component: PodcastsList },
  {
    path: moduleRoutes.podcastDetail,
    name: "Detail",
    component: PodcastDetail,
    props: true
  }
];

export const router = new Router({
  routes,
  mode: "history",
  base: "/"
});
