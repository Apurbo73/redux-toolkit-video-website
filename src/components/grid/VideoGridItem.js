import React from "react";
import { Link } from "react-router-dom";

const VideoGridItem = ({ video }) => {
  const { title, author, avatar, views, duration, date, thumbnail, id } = video;
  return (
    <div>
      {/* single video */}
      <div
        style={{ width: 300 }}
        className=" col-span-12 m-2 mb-3 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]"
      >
        <div className="w-full flex flex-col ">
          <div className="relative ">
            <Link to={`videos/${id}`}>
              <img src={thumbnail} className="w-full h-auto" alt={title} />
            </Link>
            <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
              {duration}
            </p>
          </div>
          <div className="flex flex-row mt-2 gap-2">
            <Link to={`videos/${id}`} className="shrink-0">
              <img src={avatar} className="rounded-full h-6 w-6" alt={author} />
            </Link>
            <div clas="flex flex-col">
              <Link to={`videos/${id}`}>
                <p className="text-slate-900 text-sm font-semibold">
                  {title}
                </p>
              </Link>
              <Link
                className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                to={`videos/${id}`}
              >
                Learn with Sumit
              </Link>
              <p className="text-gray-400 text-xs mt-1">
                {views} views . {date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGridItem;
