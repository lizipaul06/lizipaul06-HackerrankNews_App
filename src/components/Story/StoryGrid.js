import { StoryDetail } from "./StoryDetail";
import { Grid, GridItem, Spinner } from "@chakra-ui/react";
import { useGetStories } from "../../services/useGetStories";

const StoryGrid = ({ selectedSource }) => {
  const { data: stories, isLoading } = useGetStories(selectedSource);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={2}>
      {stories.map((story) => {
        return (
          <GridItem>
            <StoryDetail story={story} />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export { StoryGrid };
