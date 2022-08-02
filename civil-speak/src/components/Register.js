import React from 'react';
import '../styles/Register.css'

function Register(){
    return (
        <div className='register_container'>
            <header>
                <h1>Create Account</h1>
                <p>Already have an account?</p>
                <a href='#'>Log in</a>
            </header>
            <div className='oauth'>
                <h2>Sign up with</h2>
                <button>Google</button>
                <button>Facebook</button>
            </div>
            <div className='form'>
                <h2>Create an account</h2>
                <input type='text' id='email' placeholder='Username or Email'></input>
                <input type='password' id='password' placeholder='Password'></input>
                <input type='checkbox' id='remember' name='remember'></input>
                <label for='remember'>Remember Me</label>
                <button id='submit'>Log in</button>
                <a href='#'>Forgot your password?</a>
            </div>
            <p id='login_or'>or</p>
        </div>
    );
}

export default Register;