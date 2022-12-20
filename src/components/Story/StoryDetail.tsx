import { Text, Button, Link } from "@chakra-ui/react";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import { article } from "../../services/useGetStories";

const StoryDetail: React.FC<{ article: article }> = ({ article }) => {
  const { author, url, publishedAt, title } = article;
  const { t } = useTranslation("story");

  return (
    <>
      {title && (
        <Text>
          {t("title")} {title}
        </Text>
      )}
      {author && (
        <Text>
          {t("author")} {author}
        </Text>
      )}
      <Text>
        {t("published-date")} {format(new Date(publishedAt), "MM/dd/yyyy")}
      </Text>
      <Button colorScheme="teal" size="xs">
        <Link isExternal href={url}>
          {t("view-story")}
        </Link>
      </Button>
    </>
  );
};

export { StoryDetail };
