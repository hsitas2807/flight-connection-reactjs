import React, { useEffect, useState } from "react";
import { getStory } from "../services/API";
import { convertUNixTimeToDate, TimeConverter } from "../utils/TimeConverter";

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));

  }, [])

  return story && story.url ? (
    <>
      <a href={story.url}><p>{story.title}</p></a>
    Author: {story.by}  Posted On: <TimeConverter unixTime={story.time} />
      <hr />
    </>
  ) : null;

};