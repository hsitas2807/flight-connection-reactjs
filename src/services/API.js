import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const storiesUrl = `${baseUrl}item/`;

/**
 *  API method to get Story Details based on StoryId passed in input parameter.
 *  
 * @param {
 * } storyId 
 */
export const getStory = async (storyId) => {

  const result = await axios.get(`${storiesUrl + storyId}.json`).then(({ data }) => data);
  return result;
};
/**
 * API method to get New Stories
 * 
 * 
 */
export const getStoryIds = async () => {
  const result = await axios.get(newStoriesUrl).then(({ data }) => data);
  return result;
}
/**
 * API method to get Top Stories
 *
 *
 */
export const getTopStoriesIds = async () => {
  const result = await axios.get(topStoriesUrl).then(({ data }) => data);
  return result;

}
