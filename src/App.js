import React from 'react';
import Search from './Search'
import Characters from './Characters'
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      chars:[],
      loading:false
    };
  }

  formsubmit = (searchField,searchOption)=>{
    this.setState({
      chars:[],
      loading:true
    });
    let error;
    let base_url = ''
    console.log(searchOption);
    if (searchOption === 'characters'){
      base_url += 'https://swapi.dev/api/people/?search=';
    }
    if (searchOption === 'planets'){
      base_url += 'https://swapi.dev/api/planets/?search=';
    }
    if (searchOption === 'starships'){
      base_url += 'https://swapi.dev/api/starships/?search=';
    }
    if (searchOption === 'vehicles'){
      base_url += 'https://swapi.dev/api/vehicles/?search=';
    }
    if (searchOption === 'species'){
      base_url += 'https://swapi.dev/api/species/?search=';
    }
    if (searchOption === 'films'){
      base_url += 'https://swapi.dev/api/films/?search=';
    }
    console.log(base_url);
    fetch(`${base_url}${searchField}`,{
        method: "GET",
        headers: {"Content-Type": "application/json"}
    })
        .then(res=> {
          if(!res.ok){
            error={code:res.status}
          }
          return res.json()
        })
        .then(data => {
          if (error) {
              error.message = data.message;
              return Promise.reject(error);
          }
          return data;
          })
        .then((resJson)=>{
            console.log(resJson);
            this.updateState(resJson);
            this.setState({loading:false})
        })
        
  }

  updateState = (resJson)=>{
    let newchars = [];
    resJson.results.forEach((char) => {
      let chars = {
        name: char.name,
        title:char.title
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
        <Search loading={this.state.loading} formsubmit={this.formsubmit} updateState={this.updateState}></Search>
        <Characters chars={this.state.chars}></Characters>
      </div>
    )
  }
}

export default App;
