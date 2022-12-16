import { Select } from "@chakra-ui/react";

const StorySelector = ({ stories, setSelectedStoryTitle, isDisabled }) => {
  const handleChange = (event) => {
    setSelectedStoryTitle(event.target.value);
  };

  return (
    <Select
      id="story-selector"
      onChange={handleChange}
      placeholder="Select option"
      isDisabled={isDisabled}
    >
      {stories.map(({ title, id }) => {
        return (
          <option value={title} key={id}>
            {title}
          </option>
        );
      })}
    </Select>
  );
};

export { StorySelector };
