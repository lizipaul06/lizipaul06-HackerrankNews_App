import { useEffect, useState } from "react";
const baseUrl = "https://newsapi.org/v2";
const APIKey = "784964d07467407fb4849df25082c329";

const request = async (query, sourceId) => {
  return await fetch(
    `${baseUrl}/${query}?sources=${sourceId}&apiKey=${APIKey}`,
    {
      contentType: "application/json",
    }
  ).then((response) => response.json());
};

const useGetStories = (sourceId) => {
  const [stories, setStories] = useState();

  useEffect(() => {
    const fetchStories = async () => {
      const response = await request(`top-headlines`, sourceId);
      setStories(response?.articles);
    };
    if (!stories) {
      fetchStories();
    }
  }, [stories]);
  if (!stories) return { data: [], isLoading: true };

  return { data: stories, isLoading: false };
};

export { useGetStories };
