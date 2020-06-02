import React, {Component} from 'react';
import Decrementer from './Decrementer.js';
import './App.css';

class HelloWorld extends Component{
  render(){
  return <h1>Hello All! {8+11}</h1>;
  }
}

class App extends Component{
  
  render(){
    return <Decrementer value={10} />;
  }
}

export default App;
