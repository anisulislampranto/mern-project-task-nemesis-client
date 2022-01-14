import React from 'react';
import { useForm } from 'react-hook-form';
import './AddUser.css';

const AddUser = () => {
    const {register,handleSubmit,formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };


    // console.log(errors);

    return (
        <div className='add-user-card'>
            <h1>Add User</h1>
            <form className='add-user-form' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Username:</label> <br />
                    <input type="text" 
                    {...register("username", { required: "Username is Required", 
                    pattern: {value: /^[a-zA-Z0-9\-_]{0,40}$/, message: 'Invalid Username, try without numbers'}})} />
                    {errors.username && ( <small style={{color: 'red'}}>{errors.username.message}</small>)}
                </div> 
                <br />
                <div>
                    <label>Email:</label> <br />
                    <input type="text" 
                    {...register("email", { required: "Email is Required" , 
                    pattern: { value: /\S+@\S+\.\S+/,  message: "Invalid email address"}})} />
                    {errors.email && (<small style={{color: 'red'}}>{errors.email.message}</small>)}
                </div>
                <br />
                <div>
                    <label>Phone:</label> <br />
                    <input type="number" 
                    {...register("phone", { required: "Phone is Required", 
                    pattern: { value: /^[0-9]{10}$/,message: "Number Must be 10digit"}})}/>
                    {errors.phone && (<small style={{color: 'red'}}>{errors.phone.message}</small>)}
                </div>
                <br />
                <div>
                    <label>Address:</label> <br />
                    <input type="text"  {...register("age", { required: "Address is Required"})}/>
                    {errors.age && (<small style={{color: 'red'}}>{errors.age.message}</small>)}
                </div>
                <input className='submit-btn' type="submit" />
            </form>
        </div>
    );
};

export default AddUser;