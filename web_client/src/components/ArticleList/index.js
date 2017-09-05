import React, { Component } from 'react';
import Article from './Article';

class ArticleList extends Component {

  render() {

    var articles = this.props.articles;

    var articlesTemplate = articles.map(function(article, index){
      return (
        <Article data={article} key={index}/>
      )
    });

    return (
      <div className='ArticleList'>
        {articlesTemplate}
      </div>
    )
  }
}

export default ArticleList;
