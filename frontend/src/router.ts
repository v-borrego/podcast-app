import Router, { RouteConfig } from "vue-router";
import { PodcastsList } from "./pages";
import { PodcastDetail } from "./pages";
import { Episode } from "./pages";

export const moduleRoutes = {
  list: {
    name: "list",
    path: "/"
  },
  podcastDetail: {
    name: "podcast-detail",
    path: "/podcast/:id"
  },
  episode: {
    name: "episode",
    path: "/podcast/:podcastId/episode/:episodeId"
  }
};

const routes: RouteConfig[] = [
  {
    path: moduleRoutes.list.path,
    name: moduleRoutes.list.name,
    component: PodcastsList
  },
  {
    path: moduleRoutes.podcastDetail.path,
    name: moduleRoutes.podcastDetail.name,
    component: PodcastDetail,
    props: true
  },
  {
    path: moduleRoutes.episode.path,
    name: moduleRoutes.episode.name,
    component: Episode,
    props: true
  }
];

export const router = new Router({
  routes,
  mode: "history",
  base: moduleRoutes.list.path
});
