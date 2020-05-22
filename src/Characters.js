import React from 'react';
import PropTypes from 'prop-types';


export default class Characters extends React.Component{
    
    render(){
        
        let li = this.props.chars.map((item, idx)=> <li key={idx}>{item.name}{item.title}</li>)
        return(
            <ul>
                {li}
            </ul>
        )
    }
    
}

Characters.propTypes ={
        chars: PropTypes.arrayOf(PropTypes.object)
}