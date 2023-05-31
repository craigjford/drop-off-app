import React, { useState, useContext } from 'react';
import { UserContext } from "../context/user";
import { useNavigate } from 'react-router-dom';

const UserSignUpForm = () => {
  const { loggedIn, signup } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [storeName, setStoreName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const handleSignUpSubmit = (event) => {

    event.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
        store_name: storeName,
        address: address,
        city: city,
        phone: phone
      })
    }) 
    .then(res => {
      if (res.ok) {
          res.json().then(user => {
            signup(user) 
            initializeFormfields()
            navigate('/')
          })
      } else { 
        res.json().then(err => setErrors(err.errors))  
      }  
    })  
  }  

  const initializeFormfields = () => {
    setUsername("");
    setPassword("");
    setPasswordConfirmation("");
    setStoreName("");
    setAddress("");
    setCity("");
    setPhone("");
  }  

  const errorsList = errors.map((err) => <li style={{color:'red'}} key={err}>{err}</li>);


  if (loggedIn) {return navigate('/')};

  return (
    <div>
      <h1 className="formheader">Welcome to the Sign Up Form</h1>
      <br />
      <form className="course-form" onSubmit={handleSignUpSubmit}>
      <label id="formlabel" htmlFor="username">Username:  </label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      <br />
      <br />  
      <label id="formlabel" htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      <br />
      <br />  
      <label id="formlabel" htmlFor="password_confirmation">Password Confirmation: </label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      <br />
      <br /> 
      <label id="formlabel" htmlFor="storename">Store Name: </label>
        <input
          type="text"
          id="storename"
          onChange={(e) => setStoreName(e.target.value)}
          value={storeName}
        />
      <br />
      <br /> 
      <label id="formlabel" htmlFor="address">Address: </label>
        <input
          type="text"
          id="address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
      <br />
      <br /> 
      <label id="formlabel" htmlFor="city">City: </label>
        <input
          type="text"
          id="city"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
      <br />
      <br /> 
      <label id="formlabel" htmlFor="phone">Phone: </label>
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
      <br />
      <br /> 
      <button type="submit" className="any-btn">Submit</button>
    </form>
      <div>
        <br />
        <br />
        <ul>
          {errorsList}
        </ul>
      </div>  
  </div>
  );
}

export default UserSignUpForm