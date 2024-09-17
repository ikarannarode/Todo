import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { server } from '../main';
import toast from 'react-hot-toast';



function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitHandler = async (e) => {
        e.preventDefault();

        const { data } = await axios.post(`${server}/user/new`, {
            name, email, password
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        });

        toast.success(data.message)


    };
    return (
        <div className='login'>
            <section>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder='Username' value={name} onChange={(e) => setName(e.target.value)} required />
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type='submit'>Sign Up</button>
                    <h4>Or</h4>
                    <Link to="/login">Login</Link>
                </form>
            </section>
        </div>
    )
}

export default Register;