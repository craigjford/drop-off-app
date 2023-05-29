import React, { useState, useEffect } from 'react';
import CustomerList from './components/CustomerList'
import './App.css';

function App() {
  const [customers, setCustomers] = useState([]);
  const [errors, setErrors] = useState([]);

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
                setErrors(errors);
          });  
        }
    })
  }, [])

  const errorsList = errors.map((err) => <li style={{color:'red'}} key={err}>{err}</li>);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <CustomerList customers={customers} />
        </header>
      </div>
      <div>
        <ul>
          {errorsList}
        </ul>
      </div>  
    </>
  );
}

export default App;
