import { Text, Button, Link } from "@chakra-ui/react";
import { format } from "date-fns";

const StoryDetail = ({ story }) => {
  const { author, url, publishedAt } = story;

  return (
    <>
      {author && <Text> Author: {author} </Text>}
      {/* {source && <Text> Source: {source?.Name} </Text>} */}
      <Text>Published Date: {format(new Date(publishedAt), "MM/dd/yyyy")}</Text>
      <Button colorScheme="teal" size="xs">
        <Link isExternal href={url}>
          View the Story
        </Link>
      </Button>
    </>
  );
};

export { StoryDetail };
