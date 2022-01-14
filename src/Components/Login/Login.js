import React, { useEffect, useState } from 'react';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState({});
    const [password, setPassword ] = useState({});
    const [adminpanel, setAdminpanel] = useState([]);


    useEffect(()=>{
        fetch('http://localhost:4040/adminpanel')
        .then(res => res.json())
        .then(data => setAdminpanel(data))
    },[])


    const handleLogin = () =>{
        for (let i = 0; i < adminpanel.length; i++) {
            const adminInfo = adminpanel[i];
            if (email === adminInfo.email && password === adminInfo.password) {
                console.log('logged in');
            }
            
        }

        
    }


    return (
        
        <div className='login-card'> 
            <h2>Log In</h2>
            <div>
                <label htmlFor="email">Email</label> <br />
                <input onBlur={(e)=>setEmail(e.target.value)} type="email" />
            </div> 
            <div style={{marginTop:'10px', marginBottom: '10px'}}>
                <label htmlFor="password">Password</label> 
                <input onBlur={(e)=>setPassword(e.target.value)} type="password" /> 
            </div>
            <button onClick={handleLogin}>Log In</button>
        </div>
        
    );
};

export default Login;