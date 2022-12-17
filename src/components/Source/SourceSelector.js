import { Select } from "@chakra-ui/react";

const SourceSelector = ({ sources, setSelectedSource, isDisabled }) => {
  const handleChange = (event) => {
    const selectedSource = sources.find(
      (source) => source.name == event.target.value
    );
    setSelectedSource(selectedSource);
  };

  return (
    <Select
      id="source-selector"
      onChange={handleChange}
      placeholder="Select option"
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
