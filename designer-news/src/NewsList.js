import React from 'react';
import News from './News';

class NewsList extends React.Component {
  checkforId(id){
    console.log(this.props.uncheckedArr);
    var length = this.props.uncheckedArr.length;
    while(--length >=0){
      if(this.props.uncheckedArr[length] === id){
        return false;
      }
    }
    return true;
  }
  render() {
    console.log(this.props.newsList);
    var news = this.props.newsList.sort((a,b)=>b.upvote-a.upvote)
              .filter(item => this.checkforId(item.id))
              .map(news => {
      return (
        <News
          key={news.id}
          incrementUpvote={this.props.incrementUpvote}
          statusChange={this.props.statusChange}
          {...news}
        />
      
      );
    });

    return (
       
          <ul className="news-list">
            {news}
          </ul>
        
    );
  }
}

export default NewsList;
