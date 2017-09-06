import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleList from './components/ArticleList';


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
        <strong>Number of articles: {this.state.articles.length}</strong>
        <p className="App-intro">
          <ArticleList articles={this.state.articles}/>
        </p>
      </div>
    );
  }
}

export default App;
