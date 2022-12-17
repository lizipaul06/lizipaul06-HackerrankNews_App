import { Text, Button, Link } from "@chakra-ui/react";

const SourceDetail = ({ source }) => {
  const { name, description, url, category } = source;
  return (
    <>
      {name && <Text> Name: {name} </Text>}
      {description && <Text> Description: {description} </Text>}
      {category && <Text> Category: {category} </Text>}
      <Button colorScheme="teal" size="xs">
        <Link isExternal href={url}>
          View Source
        </Link>
      </Button>
    </>
  );
};

export { SourceDetail };
