import { Select } from "@chakra-ui/react";

const StorySelector = ({ stories, setSelectedStoryTitle }) => {
  const handleChange = (event) => {
    setSelectedStoryTitle(event.target.value);
  };

  return (
    <Select
      id="story-selector"
      onChange={handleChange}
      placeholder="Select option"
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
