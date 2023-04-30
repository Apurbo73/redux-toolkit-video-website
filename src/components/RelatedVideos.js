import React, { useEffect } from "react";
import RelatedVideoListItem from "./RelatedVideoListItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../features/relatedVideos/relatedVideosSlice";
import Loading from "./Loading";

const RelatedVideos = ({ currentVideoid, tags }) => {
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(fetchRelatedVideos({ tags, id: currentVideoid }));
    },
    [dispatch, currentVideoid, tags]
  );
  const { relatedVideos, isLoading, isError, error } = useSelector(
    state => state.relatedVideos
  );
  //decide what to render:
  let content = null;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = (
      <div className="col-span-12">
        {error}
      </div>
    );
  }
  if (!isLoading && !isError && relatedVideos.length === 0) {
    content = <div className="col-span-12">No related videos..</div>;
  }
  if (!isLoading && !isError && relatedVideos.length > 0) {
    content = relatedVideos.map(video =>
      <RelatedVideoListItem key={video.id} video={video} />
    );
  }
  return (
    <div>
      {/* related videos */}
      <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
        {content}
      </div>
    </div>
  );
};

export default RelatedVideos;
