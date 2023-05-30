import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import LogIn from './components/LogIn';
import UserSignUpForm from './components/UserSignUpForm';
import CustomerList from './components/CustomerList';
import './App.css';

function App() {
  const [customers, setCustomers] = useState([]);
  // const [user, setUser] = useState([]);
  // const [errors, setErrors] = useState([]);

  const loggedIn = false;
  const isTrue = true;

  console.log("got in App");

  useEffect(() => {
    fetch('/customers')
    .then(res => {
        if (res.ok) {
            res.json().then(data => {
                console.log('got data = ', data)
                setCustomers(data);
            })
        } else {
            res.json().then(errors => {
                console.log('errors = ', errors)
                // setErrors(errors);
          });  
        }
    })
  }, [])

  // const errorsList = errors.map((err) => <li style={{color:'red'}} key={err}>{err}</li>);

  return (

      <main>
      <NavBar loggedIn={loggedIn} />
        {loggedIn ? (
          <Routes>
            <Route exact="true" path="/" element={<Home isHome={isTrue} />} />
            <Route path="/customers" element={<CustomerList customers={customers} />} />  
            <Route path="*" element={<Home patch="*" isHome={!isTrue}/>} />
          </Routes>
          ) : (  
          <Routes> 
            <Route exact="true" path="/" element={<Home isHome={isTrue} />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<UserSignUpForm />} />
            <Route path="*" element={<Home path="*" isHome={!isTrue} />} />
          </Routes>  
        )} 
      </main>  
  );
}

export default App;
