import React from 'react';

const StoryDetail = (props) => {
  if(!props.story){return null}


  return(
    <div>
      <p> {props.story.title} </p>
      <p> {props.story.by} </p>
      <p> {props.story.text} </p>
      <p> {props.story.score} </p>
      <a href={props.story.url}> View the Story</a>
    </div>
  )
}


export default StoryDetail;
