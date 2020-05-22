import React from 'react';
import Search from './Search'
import Characters from './Characters'
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      chars:[]
    };
  }

  updateState = (resJson)=>{
    let newchars = [];
    resJson.results.forEach((char) => {
      let chars = {
        name: char.name
      }
      newchars.push(chars)
    });
    this.setState({
        chars: newchars
    })
  }

  render(){
    return (
      <div className="App">
        <header>
          <h1>Star Wars Search</h1>
        </header>
        <Search updateState={this.updateState}></Search>
        <Characters chars={this.state.chars}></Characters>
      </div>
    )
  }
}

export default App;
