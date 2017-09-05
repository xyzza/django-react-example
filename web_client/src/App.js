import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleList from './components/ArticleList';


var articles_list = [
  {
    author: 'Konb',
    title: 'Some experience',
    text: 'I have no experience',
  },
  {
    author: 'Kek',
    title: 'kek is better than lol',
    text: 'some lol some kek kek kek',
  },
  {
    author: 'Unknown',
    title: 'Scary title',
    text: 'Scary text',
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          <ArticleList articles={articles_list}/>
        </p>
      </div>
    );
  }
}

export default App;
