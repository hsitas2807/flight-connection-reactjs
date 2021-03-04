import React, { useEffect, useState } from "react";
import { getTopStoriesIds } from '../services/API';
import { Story } from '../component/Story';
import {infiniteScroll  } from "../hook/InfiniteScroll";

export const StoriesContainer = () => {
  const { count } = infiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getTopStoriesIds().then(data => setStoryIds(data));
  }, []);

  return storyIds.slice(0,count).map(storyId => <Story key={storyId} storyId={storyId}/>);
};