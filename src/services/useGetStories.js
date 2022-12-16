import { useEffect, useState } from "react";
const baseUrl = "https://hacker-news.firebaseio.com/v0";

const request = async (query) => {
  return await fetch(`${baseUrl}/${query}.json`).then((resp) => resp.json());
};

const useGetStories = () => {
  const [stories, setStories] = useState();

  useEffect(() => {
    const fetchStories = async () => {
      const storyIds = await request(`/topstories`);
      const storyUrls = storyIds.slice(0, 100).map((id) => `/item/${id}`);

      Promise.all(storyUrls.map((url) => request(url))).then((resp) =>
        setStories(resp)
      );
    };
    if (!stories) {
      fetchStories();
    }
  }, [stories]);
  if (!stories) return { data: [], isLoading: true };
  return { data: stories, isLoading: false };
};

export { useGetStories };
