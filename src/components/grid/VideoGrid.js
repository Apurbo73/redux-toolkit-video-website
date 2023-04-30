import React, { useEffect } from "react";
import VideoGridItem from "./VideoGridItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "./../../features/videos/videosSlice";
import Loading from "../Loading";

const VideoGrid = () => {
  const dispatch = useDispatch();
  const { videos, isLoading, isError, error } = useSelector(
    state => state.videos
  );
  const { tags, search } = useSelector(state => state.filter);
  // console.log(tags)
  useEffect(
    () => {
      dispatch(fetchVideos({ tags, search }));
    },
    [dispatch, tags, search]
  );
  // decide wat to render:
  let content;
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
  if (!isLoading && !isError && videos.length === 0) {
    content = <div className="col-span-12">No Video Found...</div>;
  }
  if (!isLoading && !isError && videos.length > 0) {
    content = videos.map(video =>
      <VideoGridItem key={video.id} video={video} />
    );
  }
  return (
    <div>
      {/* Video Grid */}
      <section className="pt-12 mb-5 ">
        <section className="pt-12 ">
          <div className="flex flex-column flex-wrap  container mx-auto  px-5 lg:px-0 ">
            {content}
            {/* <VideoGridItem /> */}
            {/* error section
              <div class="col-span-12">some error happened</div> */}
          </div>
        </section>
      </section>
    </div>
  );
};

export default VideoGrid;
