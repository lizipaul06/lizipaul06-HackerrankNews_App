import { Text, Button, Link } from "@chakra-ui/react";

const StoryDetail = ({ story }) => {
  const { by, score, url } = story;

  return (
    <>
      <Text> By: {by} </Text>
      <Text> Score: {score} </Text>
      <Button colorScheme="teal" size="xs">
        <Link isExternal href={url}>
          View the Story
        </Link>
      </Button>
    </>
  );
};

export { StoryDetail };
