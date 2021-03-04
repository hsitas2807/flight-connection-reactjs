import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const storiesUrl = `${baseUrl}item/`;

export const getStory = async(storyId) => {

  const result = await axios.get(`${storiesUrl + storyId}.json`).then(({ data }) => data);
  return result;
};

export const getStoryIds = async () =>
{
  const result = await axios.get(newStoriesUrl).then(({ data }) => data);
  return result;
}
  
export const getTopStoriesIds = async () =>
{
  const result = await axios.get(topStoriesUrl).then(({data})=> data);
  
  }
