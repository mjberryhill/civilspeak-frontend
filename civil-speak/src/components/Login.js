import React from 'react';
import '../styles/Login.css'

function Login(){
    return (
        <div className='login_container'>
            <header>
                <p className='cancel'>Cancel</p>
                <p className='log'>Log In With</p>
                <p className='create'>Create an account</p>
            </header>
            <div className='oauth'>
                <button>Google</button>
                <button>Facebook</button>
            </div>
            <div className='form'>
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

export default Login;