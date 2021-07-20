import React, { useState, useEffect } from "react";
import { getStory } from "../services/HNAPI";
import {
  StoryMeta,
  StoryMetaElement,
  StoryTitle,
  StoryWrapper,
} from "../styles/StoryStyles";

function Story({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => {
      data && data.url && setStory(data);
    });
  });

  return story && story.url ? (
    <StoryWrapper data-testid='story'>
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>
      <StoryMeta>
        <span data-testid='story-by'>
          <StoryMetaElement color='#000'>By :</StoryMetaElement>
          {story.by}
        </span>
        <span data-testid='story-time'>
          <StoryMetaElement color='#000'>Posted :</StoryMetaElement>
          {story.time}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
}

export default Story;
