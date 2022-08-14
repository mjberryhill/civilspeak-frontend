import React from 'react';
import '../styles/Register.css'

function Register(){
    return (
        <div className='register_container'>
            <header>
                <h1>Create Account</h1>
                <p>Already have an account?</p>
                {/* <a href='#'>Log in</a> */}
            </header>
            <div className='oauth'>
                <h2>Sign up with</h2>
                <button>Google</button>
                <button>Facebook</button>
            </div>
            <div className='form'>
                <h2>Create an account</h2>
                <label for='username'>Username</label>
                <input type='text' id='username' name='username' placeholder='Username or Email'></input>
                <label for='password'>Password</label>
                <input type='password' name='password' id='password' placeholder='Password'></input>
                <label for='confPassword'>Password</label>
                <input type='password' name='confPassword' id='confPassword' placeholder='Confirm Password'></input>
                <label for='email'>E-mail</label>
                <input type='email' name='email' id='email' placeholder='E-mail'></input>
                <label for='realName'>Real Name (optional)</label>
                <input type='text' name='realName' id='realName' placeholder='Real Name'></input>
                <input type='checkbox' id='realCheck' name='realCheck'></input>
                <label for='realCheck'>I would like to use my real name as my display name.</label>
                <input type='checkbox' id='remember' name='remember'></input>
                <label for='remember'>Remember Me</label>
                <button id='submit'>Create your account</button>
            </div>
            <p id='login_or'>or</p>
        </div>
    );
}

export default Register;