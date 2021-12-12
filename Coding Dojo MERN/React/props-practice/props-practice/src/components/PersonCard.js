import React, { useState } from 'react'
const PersonCard = (props) => {

    const {firstName, lastName, age, hairColor} = props;
    const [currentAge, setCurrentAge] = useState(age);
    const addAge = ()=> {
        setCurrentAge((pAge) => pAge + 1)
    }
    return(
        <div>
            <p>{lastName}, {firstName}</p>
            <p>{currentAge}</p>
            <button onClick={ addAge }> Birthday Button for {firstName} {lastName} </button> 
            <p>Hair Color: {hairColor}</p>
        </div>
    )
}

export default PersonCard;