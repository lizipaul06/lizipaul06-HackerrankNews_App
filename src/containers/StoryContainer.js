import React from 'react';
import StorySelector from '../components/StorySelector';
import StoryDetail from '../components/StoryDetail';
  const url ="https://hacker-news.firebaseio.com/v0/topstories.json"





class StoryContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      stories:[],
      selectedStoryTitle: ""
 }
      this.handleStorySelected = this.handleStorySelected.bind(this);
  };




async componentDidMount(){

    const result = await fetch(url).then(data => data.json());
    const ids = result.slice(0, 100).map( id => "https://hacker-news.firebaseio.com/v0/item/"+id.toString()+".json")

    Promise.all(ids.map(url => fetch(url).then(resp => resp.json()))).then(resp => this.setState({stories: resp}))
  }




  handleStorySelected(title){
    this.setState({selectedStoryTitle: title})
  }




render(){
    const selectedStoryTitle = this.state.stories.find(story => story.title === this.state.selectedStoryTitle)
  return(
    <div>
     <h2> Latest stories </h2>
     <StorySelector stories={this.state.stories}
     onStorySelected = {this.handleStorySelected}/>
     <StoryDetail story={selectedStoryTitle}/>


    </div>
  )
}
}


export default StoryContainer;
