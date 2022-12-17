import { useEffect, useState } from "react";
const baseUrl = "https://newsapi.org/v2";
const APIKey = "784964d07467407fb4849df25082c329";

const request = async (query, source) => {
  return await fetch(`${baseUrl}/${query}?sources=${source}&apiKey=${APIKey}`, {
    contentType: "application/json",
  }).then((response) => response.json());
};

const useGetStories = (source) => {
  const [stories, setStories] = useState();

  useEffect(() => {
    const fetchStories = async () => {
      const response = await request(`top-headlines`, source);
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
