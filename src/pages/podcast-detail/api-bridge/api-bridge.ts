import { Api } from "../../../api";
import { mapPodcastApiModelToViewModel } from "../podcast-detail.mapper";
import { memoize } from "../../../common/memoize-utils";

export const getPodcastDetail = (id: number) =>
  memoize(id)(() =>
    Api.getPodcastDetail(id).then(mapPodcastApiModelToViewModel)
  );
