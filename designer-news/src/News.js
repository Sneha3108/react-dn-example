import React from 'react';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.incrementUpvote = this.incrementUpvote.bind(this);
    this.statusChange = this.statusChange.bind(this);

  }

  incrementUpvote() {
    this.props.incrementUpvote(this.props.id);
  }
 
 statusChange(){
  this.props.statusChange(this.props.id);
 }
  render(){
    return (
      <li className="news-container">
   
       <img alt={this.props.text} src={this.props.image} onClick={this.incrementUpvote}/>
       <span>{this.props.upvote}</span>
     
       <span className="news-content">{this.props.text}
       <input type="checkbox" onChange={this.statusChange}/></span>
      </li>
    );
  }
}

export default News;
