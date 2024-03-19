import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login() {

    const [user, setUser] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.length >= 5) {
            navigate(`/todoPage/${user}`);
            toast.success("Login Successfully!")
        }else{
            toast.error("Enter Valid Name!")
        }
    }

    return (
        <div className='login-page'>
            <div className="login-box">
                <h1>Login</h1>
                <form className='login-form' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter your name' value={user} required onChange={(e) => setUser(e.target.value)} />
                    <button type='submit' className='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}
