import React, { useState, useEffect } from 'react'

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);

    console.log('in context');

    useEffect(()=>{
        fetch('/me')
        .then(res => {
            if(res.ok) {
                res.json().then(user => {
                    setUser(user);
                    setLoggedIn(true);
                    // fetchDealers();
                    console.log('got me');
                })
            } else {
                setLoading(false)
                console.log('did not get me');
            }   
        })
    },[])

    const signup = (user) => {
        setUser(user);
        setLoggedIn(true);
    }

    const login = (user) => {
        setUser(user);
        setLoggedIn(true);
        // fetchDealers();
    }
    
    const logout = () => {
        setUser({});
        setLoggedIn(false);
        // setDealers([]);
    }

    return (
        <UserContext.Provider value={{ user, loading, loggedIn, signup, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };