import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import ArticleList from './components/ArticleList';

class Article extends Component {
  render() {

    var title = this.props.data.title,
        announce = this.props.data.announce;

    return (
      <div className='Article'>
        <p className='Article__title'>{title}</p>
        <p className='Article__announce'>{announce}</p>
      </div>
    )
  }
}

class News extends Component {

  render() {

    var articles = this.props.articles;

    var articlesTemplate = articles.map(function(article, index){
      return (
        <Article data={article} key={article.id}/>
      )
    });

    if (!articles.length) {
      articlesTemplate = <p>There are no articles yet...</p>;
    }

    return (
      <div className='News'>
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
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <strong className={this.state.articles.length >0 ? '':'none'}>
          Number of articles: {this.state.articles.length}
        </strong>
        <p className="App-intro">
          <News articles={this.state.articles}/>
        </p>
      </div>
    );
  }
}

export default App;
