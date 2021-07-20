import axios from "axios";
import selectFields from "../utils/selectFields";

export const BASEURL = ` https://hacker-news.firebaseio.com/v0/`;
export const newStoriesUrl = `${BASEURL}/newstories.json`;
export const storyURL = `${BASEURL}/item/`;

export const getStory = async (storyId) => {
  const result = await axios(storyURL + storyId + ".json").then(
    ({ data }) => data && selectFields(data)
  );

  return result;
};

export const getStoryIds = async () => {
  const result = await axios(newStoriesUrl).then(({ data }) => data);

  return result;
};
