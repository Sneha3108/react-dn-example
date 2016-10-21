import React from 'react';

class FilterNewsList extends React.Component {
  constructor(props) {
    super(props);
    this.CheckedList = this.CheckedList.bind(this);
    this.allList = this.allList.bind(this);

  }

 CheckedList(id) {
    this.props.checkedList(this.props.id);
  }

  allList(id) {
    this.props.showAllList(this.props.id);
  }
  render() {
   return(
    <ul className="navigation">
    <li onClick={this.allList}>All</li>
    <li onClick={this.CheckedList}>Starred</li>
    </ul>
    )
 }
}
       

export default FilterNewsList;
