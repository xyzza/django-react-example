import React, { Component } from 'react';
import ArticleListView from './ArticleListView';

class ArticleList extends Component {

  render() {

    var articles = this.props.articles;

    var articlesTemplate = articles.map(function(article, index){
      return (
        <ArticleListView data={article} key={article.id}/>
      )
    });

    if (!articles.length) {
      articlesTemplate = <p>There are no articles yet...</p>;
    }

    return (
      <div className='ArticleList'>
        {articlesTemplate}
      </div>
    )
  }
}

export default ArticleList;
