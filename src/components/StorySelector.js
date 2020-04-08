import React from 'react';

const StorySelector = (props) => {
    if(!props.stories){return null}
  const options = props.stories.map(story =>{
    return <option value={story.title} key={story.id}> {story.title} </option>
  })


  function handleChange(event){
    props.onStorySelected(event.target.value)
  }

  return(
    <select id="story-selector" onChange = {handleChange} defaultValue="default">
     <option disabled value="default"> Choose a story..</option>
     {options}
     </select>
  )
}

export default StorySelector;
