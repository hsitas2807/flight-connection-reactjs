import { useState, useEffect } from "react";


export const STORY_INCREMENT = 30;
export const MAX_STORIES = 500
/**
 *  Implement infinite scroll which loads 30 element at first.Upon scroll it will load another 30 elements.
 * 
 * 
 */
export const infiniteScroll = () => {

  const [loading, setLoading] = useState(false);
  const [count, setcount] = useState(STORY_INCREMENT);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
      return false;
    }
    setLoading(true);
  };

  useEffect(() => {
    if (!loading) return;

    if (count + STORY_INCREMENT >= MAX_STORIES) {
      setcount(MAX_STORIES);
    } else {
      setcount(count + STORY_INCREMENT);
    }
    setLoading(false);
  }, [loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return { count };
};