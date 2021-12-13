import React, { useState } from  'react';
    
const isValidLength = (value, minLength) => {
  return value.length >= minLength;
}

const Form = (props) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword] = useState("");

  return (
    <div>
      <form>
        <div>
            <label>First Name</label>
            <input 
                type="text" 
                name="firstName"
                onChange={ (e) => setFirstName(e.target.value) }/>
            {
              isValidLength(firstName, 2) ? 
              null : 
              <p className="error">First Name must be at least 2 characters</p>
            }
        </div>

        <div>
            <label>Last Name</label>
            <input 
                type="text" 
                name="lastName" 
                onChange={ (e) => setLastName(e.target.value) }/>
            {
            isValidLength(lastName, 2) ? 
            null : 
            <p className="error">Last Name must be at least 2 characters</p>
            }
          
        </div>

        <div>
            <label>Email</label>
            <input 
                type="text" 
                name="email" 
                onChange={ (e) => setEmail(e.target.value) }/>
            {
            isValidLength(email, 5) ? 
            null : 
            <p className="error">Email must be at least 5 characters</p>
            }
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                name="password" 
                onChange={ (e) => setPassword(e.target.value) }/>
            {
            isValidLength(email, 8) ? 
            null : 
            <p className="error">Password must be at least 8 characters</p>
            }
            {
            password.length >= 8 && confirmPassword.length > 0 ?
            password !== confirmPassword ?
            <p className="error">Passwords do not match</p>
            : null
            : null 
            }
        </div>
        <div>
          <label htmlFor="confirmPassord">Confirm Password</label>
          <input 
            type="password" 
            name="confirmPassword" 
            onChange={ (e) => setConfirmPassword(e.target.value) }/>
        </div>
      </form>

      <div>
        <h3>Your Form Data</h3>
        <p>
          <label>First Name: </label>{ firstName }
        </p>
        <p>
          <label>Last Name: </label>{ lastName }
        </p>
        <p>
          <label>Email: </label>{ email }
        </p>
        <p>
          <label>Password: </label>{ password }
        </p>
        <p>
          <label>Confirm Password: </label>{ confirmPassword }
        </p>
      </div>
    </div>
  )
}

export default Form;
