import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import ArticleList from './components/ArticleList';

class Article extends Component {
  render() {

    var title = this.props.data.title,
        announce = this.props.data.announce;

    return (
      <div className='article'>
        <p className='article__title'>{title}</p>
        <p className='article__announce'>{announce}</p>
      </div>
    )
  }
}

class News extends Component {

  render() {

    var articles = this.props.articles;
    var articlesTemplate;

    if (articles.length > 0) {

      articlesTemplate = articles.map(function(article, index){
        return (
          <Article data={article} key={article.id}/>
        )
      });

    } else {
      articlesTemplate = <p>There are no articles yet...</p>;
    }

    return (
      <div className='news'>
        <strong className={'news__count' + (articles.length >0 ? '':'none')}>
          Number of articles: {articles.length}
        </strong>
        {articlesTemplate}
      </div>
    )
  }
}


class App extends Component {

  state = {
    articles: []
  };

  async loadArticles() {
    this.setState({
      articles: await fetch("http://127.0.0.1:8000/api/v0/articles/"
        ).then(response =>response.json()
        ).catch(e => {
          alert(e); //some error handling
        return [];
  })
    })
  }

  componentDidMount() {
    this.loadArticles();
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
        </div>
        <News articles={this.state.articles}/>
      </div>
    );
  }
}

export default App;
