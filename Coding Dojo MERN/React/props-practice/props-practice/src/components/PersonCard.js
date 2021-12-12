import React, { useState } from 'react'




const PersonCard = (props) => {

    const {firstName, lastName, age, hairColor} = props;
    const [currentAge, setCurrentAge] = useState(props.age);
    const addAge = ()=> {
        setCurrentAge(currentAge + "1")
    }
    return(
        
    
        <div>
            <p>{lastName}, {firstName}</p>
            <p>{currentAge}</p>
            {/* <button onClick={()=>{ setCurrentAge(setCurrentAge + 1)}}>Birthday</button> */}
            <button onClick={()=>{setCurrentAge(currentAge + 1)}}> Birthday Button for {firstName} {lastName} </button> 
            <p>Hair Color: {hairColor}</p>
        </div>
    )
}


export default PersonCard;