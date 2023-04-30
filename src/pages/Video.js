import React, { useEffect } from "react";
import VideoPlayer from "../components/VideoPlayer";
import VideoDescription from "../components/VideoDescription";
import LikeUnlike from "../components/LikeUnlike";
import RelatedVideos from "../components/RelatedVideos";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideo } from "../features/video/videoSlice";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const Video = () => {
  const dispatch = useDispatch();
  const { video, isLoading, isError, error } = useSelector(
    state => state.video
  );
  const { videoId } = useParams();
  const { link, title, tags, id } = video;
  // console.log(videoId);
  useEffect(
    () => {
      dispatch(fetchVideo(videoId));
    },
    [dispatch,videoId]
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
  if (!isLoading && !isError && !video.id) {
    content = <div className="col-span-12">No Video Found</div>;
  }
  if (!isLoading && !isError && video.id) {
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          {/* video player */}

          <VideoPlayer link={link} title={title} />
          {/* description */}
      <div className="flex">
      <VideoDescription video={video} />
          {/* like unlike */}
          <LikeUnlike />
      </div>
        </div>
        {/* related videos */}
        <RelatedVideos currentVideoid={id} tags={tags} />
      </div>
    );
  }
  return (
    <div>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          {content}
        </div>
      </section>
    </div>
  );
};

export default Video;
