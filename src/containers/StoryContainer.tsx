import { useState } from "react";
import { SourceDetail, StoryGrid, SourceSelector } from "../components";
import { Spinner, Card, CardHeader, CardBody, Heading } from "@chakra-ui/react";
import { useGetStorySources } from "../services/useGetStorySources";
import { useTranslation } from "react-i18next";
import { source } from "../services/useGetStorySources";

const StoryContainer = () => {
  const [selectedSource, setSelectedSource] = useState<source | undefined>();
  const { data: sources, isLoading } = useGetStorySources();
  const { t } = useTranslation("story");

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Card>
      <CardHeader>
        <Heading>{t("latest-stories")}</Heading>
      </CardHeader>
      <CardBody>
        <SourceSelector
          sources={sources}
          setSelectedSource={setSelectedSource}
          isDisabled={isLoading}
        />
        {selectedSource && (
          <>
            <SourceDetail source={selectedSource} />
            <StoryGrid sourceId={selectedSource.id} />
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default StoryContainer;
