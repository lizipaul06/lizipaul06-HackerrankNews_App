import { useRequest } from "./useRequest";

const useGetStorySources = () => {
  const response = useRequest(`top-headlines/sources`, {
    category: "technology",
    country: "us",
  });
  if (!response?.sources) return { data: [], isLoading: true };

  return { data: response?.sources, isLoading: false };
};

export { useGetStorySources };
