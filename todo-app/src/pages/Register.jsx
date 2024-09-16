import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(name, email, password);

    }
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