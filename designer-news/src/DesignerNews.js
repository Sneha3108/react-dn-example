import React from 'react';
import news from './data/news';
import NewsList from './NewsList';
import FilterNewsList from './FilterNewsList';

class DesignerNews extends React.Component {
  constructor(props) {
    super(props);
    this.incrementUpvote = this.incrementUpvote.bind(this);
    this.statusChange = this.statusChange.bind(this);
    this.checkedList = this.checkedList.bind(this);
    this.showAllList = this.showAllList.bind(this);

    this.state = {
      newsList: news,
      uncheckedArr:[]
      }
  }
 incrementUpvote(id){
      var newsList = this.state.newsList.slice(0).map(item=>Object.assign({},item));
      var news= newsList.find(item=>item.id===id);
      news.upvote=news.upvote+1;
      this.setState({
        newsList
      })
 }
 statusChange(id){
    var newsList = this.state.newsList.slice(0).map(item=>Object.assign({},item));
    var news= newsList.find(item=>item.id===id);
    console.log(news);
    if(news.status===false)
      news.status=true;
    else news.status=false;
    console.log(news);
    this.setState({
        newsList
      })
 }

 showAllList(){
    var newsList = this.state.newsList.slice(0).map(item=>Object.assign({},item));
    var uncheckedArr = this.state.uncheckedArr.slice(0).map(item=>Object.assign({},item));
      this.setState({
        newsList,
        uncheckedArr:[]
    });
  }

 checkedList(id){
    var newsList = this.state.newsList.slice(0).map(item=>Object.assign({},item));
    var uncheckedArr = this.state.uncheckedArr.slice(0).map(item=>Object.assign({},item));
    console.log(newsList);
    newsList.forEach(item => {
      console.log(item.status);
      if(item.status === false){
        uncheckedArr.push(item.id);
      }

    });
    console.log(uncheckedArr);
    this.setState({
       uncheckedArr
      })
   
 }
  render() {
    return (
      <div className="container">
        
            <h1>{this.props.headerText}</h1>
          
        <FilterNewsList
         checkedList={this.checkedList}
         showAllList={this.showAllList}
          />
        <NewsList
          newsList={this.state.newsList} 
          uncheckedArr={this.state.uncheckedArr}
          incrementUpvote={this.incrementUpvote}
          statusChange={this.statusChange}/>
      </div>
    );
  }
}

export default DesignerNews;
