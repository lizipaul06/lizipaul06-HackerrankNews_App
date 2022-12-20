import { Text, Button, Link } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { source } from "../../services/useGetStorySources";

const SourceDetail: React.FC<{ source: source }> = ({ source }) => {
  const { name, description, url, category } = source;
  const { t } = useTranslation("source");

  return (
    <>
      {name && (
        <Text>
          {t("name")}
          {name}
        </Text>
      )}
      {description && (
        <Text>
          {t("description")} {description}
        </Text>
      )}
      {category && (
        <Text>
          {t("category")}
          {category}
        </Text>
      )}
      <Button colorScheme="teal" size="xs">
        <Link isExternal href={url}>
          {t("view-source")}
        </Link>
      </Button>
    </>
  );
};

export { SourceDetail };
