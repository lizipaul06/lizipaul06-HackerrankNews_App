import { useEffect, useState } from "react";
const baseUrl = "https://hacker-news.firebaseio.com/v0";

const request = async (query) => {
  return await fetch(`${baseUrl}/${query}`).then((resp) => resp.json());
};

const useGetStories = () => {
  const [stories, setStories] = useState();

  useEffect(() => {
    const fetchStories = async () => {
      const storyIds = await request(`/topstories.json`);
      const storyUrls = storyIds.slice(0, 100).map((id) => `/item/${id}.json`);

      Promise.all(storyUrls.map((url) => request(url))).then((resp) =>
        setStories(resp)
      );
    };
    if (!stories) {
      fetchStories();
    }
  }, [stories]);
  if (!stories) return { data: null, isLoading: true };
  return { data: stories, isLoading: false };
};

export { useGetStories };
