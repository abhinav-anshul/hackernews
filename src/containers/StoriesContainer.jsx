import React, { useState, useEffect } from "react";
import Story from "../components/Story";
import { getStoryIds } from "../services/HNAPI";
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from "../styles/StoriesContainerStyles";

function StoriesContainer() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <React.Fragment>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id='stories-container'>
        <h1>Hacker News</h1>
        {storyIds.map((storyId) => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </React.Fragment>
  );
}

export default StoriesContainer;
