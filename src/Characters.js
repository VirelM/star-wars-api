import React from 'react';



export default class Characters extends React.Component{
    render(){
        
        let li = this.props.chars.map((item, idx)=> <li key={idx}>{item.name}</li>)
        return(
            <ul>
                {li}
            </ul>
        )
    }
}