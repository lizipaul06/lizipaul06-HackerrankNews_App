import { useState } from "react";
import { StoryDetail, StorySelector } from "../components";
import { useGetStories } from "../services/useGetStories";
import { Spinner, Card, CardHeader, CardBody, Heading } from "@chakra-ui/react";

const StoryContainer = () => {
  const [selectedStoryTitle, setSelectedStoryTitle] = useState("");
  const { data: stories, isLoading } = useGetStories();

  const selectedStory = stories.find(
    (story) => story.title === selectedStoryTitle
  );

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Card>
      <CardHeader>
        <Heading> Latest stories</Heading>
      </CardHeader>
      <CardBody>
        <StorySelector
          stories={stories}
          setSelectedStoryTitle={setSelectedStoryTitle}
          isDisabled={isLoading}
        />

        {selectedStory && <StoryDetail story={selectedStory} />}
      </CardBody>
    </Card>
  );
};

export default StoryContainer;
