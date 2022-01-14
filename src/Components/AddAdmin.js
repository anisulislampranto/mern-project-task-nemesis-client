import React from 'react';
import { useState } from 'react/cjs/react.development';

const AddAdmin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () =>{
        fetch('http://localhost:4040/addadmin', {
            method:'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify({email, password})
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                alert('User Added Succesfully')
            }
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input onBlur={(e)=> setEmail(e.target.value)} type="text" />
            <input onBlur={(e)=> setPassword(e.target.value)} type="text"/>
            <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default AddAdmin;