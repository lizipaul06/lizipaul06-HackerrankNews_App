import { useState } from "react";
import { StoryDetail, StorySelector } from "../components";
import { useGetStories } from "../services/useGetStories";
import { Spinner, Card, CardHeader, CardBody, Heading } from "@chakra-ui/react";

const StoryContainer = () => {
  const [selectedStoryTitle, setSelectedStoryTitle] = useState("");
  const { data: stories, isLoading } = useGetStories();

  const selectedStory = stories?.find(
    (story) => story.title === selectedStoryTitle
  );

  if (isLoading) {
    <Spinner />;
  }
  return (
    <Card>
      <CardHeader>
        <Heading> Latest stories</Heading>
      </CardHeader>
      <CardBody>
        {stories && (
          <StorySelector
            stories={stories}
            setSelectedStoryTitle={setSelectedStoryTitle}
          />
        )}

        {selectedStory && <StoryDetail story={selectedStory} />}
      </CardBody>
    </Card>
  );
};

export default StoryContainer;
