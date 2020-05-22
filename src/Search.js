import React from 'react';

export default class Search extends React.Component{
   

    
    render(){
        if (this.props.loading) {
            return <div>Loading...</div>;
        }
        return(
            <form onSubmit={e=>{
                e.preventDefault();
                
                this.props.formsubmit(e.target.peopleInput.value, e.target.searchOption.value)}}>
                <label htmlFor="peopleInput">Search within Star Wars</label>
                <select id="searchOption">
                    <option value="characters">characters</option>
                    <option value="planets">planets</option>
                    <option value="starships">starships</option>
                    <option value="vehicles">vehicles</option>
                    <option value="species">species</option>
                    <option value="films">films</option>
                </select>
                <input type="text" id="peopleInput"></input>
                
                <button type="submit">Search</button>
            </form>
        )
    }
}