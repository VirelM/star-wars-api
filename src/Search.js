import React from 'react';

export default class Search extends React.Component{
    formsubmit = (person)=>{
        console.log('hey world');
        let base_url = 'https://swapi.dev/api/people/?search=';
        fetch(`${base_url}${person}`,{
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
            .then(res=> res.json())
            .then((resJson)=>this.props.updateState(resJson))
    }

    
    render(){
        return(
            <form onSubmit={e=>{
                e.preventDefault();
                
                this.formsubmit(e.target.peopleInput.value)}}>
                <label htmlFor="peopleInput">Search Characters</label>
                <input type="text" id="peopleInput"></input>
                <button type="submit">Search</button>
            </form>
        )
    }
}