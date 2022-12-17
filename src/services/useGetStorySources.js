import { useEffect, useState } from "react";
const baseUrl = "https://newsapi.org/v2";
const APIKey = "784964d07467407fb4849df25082c329";

const request = async (query) => {
  return await fetch(
    `${baseUrl}/${query}/sources?category=technology&country=us&apiKey=${APIKey}`,
    { contentType: "application/json" }
  ).then((response) => response.json());
};

const useGetStorySources = () => {
  const [source, setSource] = useState();

  useEffect(() => {
    const fetchSource = async () => {
      const response = await request(`top-headlines`);
      setSource(response?.sources);
    };
    if (!source) {
      fetchSource();
    }
  }, [source]);
  if (!source) return { data: [], isLoading: true };
  debugger;
  return { data: source, isLoading: false };
};

export { useGetStorySources };
