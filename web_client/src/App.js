import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleList from './components/ArticleList';


var articlesList = [
  {
    id: 'art_1',
    author: 'Konb',
    title: 'Some experience',
    text: 'I have no experience',
  },
  {
    id: 'art_2',
    author: 'Kek',
    title: 'kek is better than lol',
    text: 'some lol some kek kek kek',
  },
  {
    id: 'art_3',
    author: 'Unknown',
    title: 'Scary title',
    text: 'Scary text',
  }
];

// var articlesList = [];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <strong>Number of articles: {articlesList.length}</strong>
        <p className="App-intro">
          <ArticleList articles={articlesList}/>
        </p>
      </div>
    );
  }
}

export default App;
