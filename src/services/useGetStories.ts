import { useRequest } from "./useRequest";

export interface article {
  author: string;
  url: string;
  publishedAt: Date;
  title: string;
}

interface articleResponse {
  articles: article[] | undefined;
}

const useGetStories = (sourceId: string) => {
  const response: articleResponse | undefined = useRequest<
    { sources: string },
    articleResponse
  >(`top-headlines`, { sources: sourceId });
  if (!response?.articles) return { data: [], isLoading: true };

  return { data: response?.articles, isLoading: false };
};

export { useGetStories };
