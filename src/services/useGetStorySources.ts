import { useRequest } from "./useRequest";

export interface source {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
}

interface sourceResponse {
  sources: source[] | undefined;
}

const useGetStorySources = () => {
  const response = useRequest<
    { category: string; country: string },
    sourceResponse
  >(`top-headlines/sources`, {
    category: "technology",
    country: "us",
  });
  if (!response?.sources) return { data: [], isLoading: true };

  return { data: response?.sources, isLoading: false };
};

export { useGetStorySources };
