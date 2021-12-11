import React from 'react'




const PersonCard = (props) => {

    const {firstName, lastName, age, hairColor} = props;

    return(
        
    
        <div>
            <p>{lastName}, {firstName}</p>
            <p>{age}</p>
            <p>{hairColor}</p>
        </div>
    )
}


export default PersonCard;