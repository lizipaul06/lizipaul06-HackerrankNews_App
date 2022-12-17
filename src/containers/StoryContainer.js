import { useState } from "react";
import { SourceDetail, StoryGrid, SourceSelector } from "../components";
import { Spinner, Card, CardHeader, CardBody, Heading } from "@chakra-ui/react";
import { useGetStorySources } from "../services/useGetStorySources";

const StoryContainer = () => {
  const [selectedSource, setSelectedSource] = useState("");
  debugger;
  const { data: sources, isLoading } = useGetStorySources();
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Card>
      <CardHeader>
        <Heading> Latest stories</Heading>
      </CardHeader>
      <CardBody>
        <SourceSelector
          sources={sources}
          setSelectedSource={setSelectedSource}
          isDisabled={isLoading}
        />
        <SourceDetail source={selectedSource} />

        {selectedSource && (
          <>
            <StoryGrid selectedSource={selectedSource} />
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default StoryContainer;
