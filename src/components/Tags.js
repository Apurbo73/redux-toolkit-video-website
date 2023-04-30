import React, { useEffect } from "react";
import Tag from "./Tag";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../features/tags/tagsSlice";

const Tags = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector(state => state.tags);
  useEffect(
    () => {
      dispatch(fetchTags());
    },
    [dispatch]
  );
  //decide what to render
  return tags.length > 0
    ? <div>
        {/* Tags */}
        <section>
          <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
            {tags.map(tag => <Tag key={tag.id} title={tag.title} />)}
          </div>
        </section>
      </div>
    : null;
};

export default Tags;
