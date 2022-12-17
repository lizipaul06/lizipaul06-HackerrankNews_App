import { Select } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const SourceSelector = ({ sources, setSelectedSource, isDisabled }) => {
  const { t } = useTranslation("source");

  const handleChange = (event) => {
    const selectedSource = sources.find(
      (source) => source.name === event.target.value
    );
    setSelectedSource(selectedSource);
  };

  return (
    <Select
      id="source-selector"
      onChange={handleChange}
      placeholder={t("select-option")}
      isDisabled={isDisabled}
    >
      {sources.map(({ name, id }) => {
        return (
          <option value={name} key={id}>
            {name}
          </option>
        );
      })}
    </Select>
  );
};

export { SourceSelector };
