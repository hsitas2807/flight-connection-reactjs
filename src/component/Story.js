import React, { useEffect, useState } from "react";
import { getStory } from "../services/API";

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
    
  }, [])

  return story && story.url ? (
    <>
    <a href={story.url}><p>{story.title}</p></a>     
    By: {story.by}  Time: {story.time}
      </>
  ): null;

};