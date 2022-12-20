import { Select } from "@chakra-ui/react";
import { Dispatch, SetStateAction, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { source } from "../../services/useGetStorySources";

interface SourceSelectorProps {
  sources: source[];
  setSelectedSource: Dispatch<SetStateAction<source | undefined>>;
  isDisabled: boolean;
}

const SourceSelector: React.FC<SourceSelectorProps> = ({
  sources,
  setSelectedSource,
  isDisabled,
}) => {
  const { t } = useTranslation("source");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedSource: source | undefined = sources.find(
      (source: source) => source.name === event.target.value
    );
    if (selectedSource) setSelectedSource(selectedSource);
  };

  const optionPlaceholder = t("select-option");
  return (
    <Select
      id="source-selector"
      onChange={handleChange}
      placeholder={optionPlaceholder}
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
