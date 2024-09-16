import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='login'>
            <section>
                <form onClick={submitHandler}>
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <button type='submit'>Login</button>
                    <h4>Or</h4>
                    <Link to="/register">Sign Up</Link>
                </form>
            </section>
        </div>
    );
};

export default Login;