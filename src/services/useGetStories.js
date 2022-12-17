import { useRequest } from "./useRequest";

const useGetStories = (sourceId) => {
  const response = useRequest(`top-headlines`, { sources: sourceId });
  if (!response?.articles) return { data: [], isLoading: true };

  return { data: response?.articles, isLoading: false };
};

export { useGetStories };
