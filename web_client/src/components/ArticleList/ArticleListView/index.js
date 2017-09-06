import React, { Component } from 'react';

class ArticleListView extends Component {
  render() {

    var data = this.props.data;

    return (
      <div className='Article'>
        <p className='Article__title'>{data.title}</p>
        <p className='Article__author'>{data.announce}</p>
      </div>
    )
  }
}

export default ArticleListView;
