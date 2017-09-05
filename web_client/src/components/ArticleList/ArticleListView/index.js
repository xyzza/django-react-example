import React, { Component } from 'react';

class ArticleListView extends Component {
  render() {

    var data = this.props.data;

    return (
      <div className='article'>
        <p className='article__author'>{data.author}</p>
        <p className='article__title'>{data.title}</p>
      </div>
    )
  }
}

export default ArticleListView;
