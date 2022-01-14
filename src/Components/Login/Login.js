import React from 'react';
import './Login.css'

const Login = () => {
    return (
        
        <div className='login-card'> 
            <h2>Log In</h2>
            <div>
                <label htmlFor="email">Email</label> <br />
                <input type="email" />
            </div> 
            <div style={{marginTop:'10px', marginBottom: '10px'}}>
                <label htmlFor="password">Password</label> 
                <input type="password" /> 
            </div>
            <button>Log In</button>
        </div>
        
    );
};

export default Login;