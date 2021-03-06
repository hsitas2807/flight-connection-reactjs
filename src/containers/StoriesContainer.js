import React, { useEffect, useState } from "react";
import { getStoryIds } from '../services/API';
import { Story } from '../component/Story';
import { infiniteScroll } from "../hook/InfiniteScroll";

/**
 *  Call New Stories API and pass the id to Story Componenet.
 * 
 */
export const StoriesContainer = () => {
  const { count } = infiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  return storyIds.slice(0, count).map(storyId => <Story key={storyId} storyId={storyId} />);
};