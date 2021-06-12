import React from 'react'
import AuthLayout from '../../../shared/AuthLayout/AuthLayout';
import './Login.css'

const Login = () => {
    return (
        <AuthLayout>
            <p className="message">Welcome to RelayBox don’t you have an account, <span className="underlined primary_color">click here </span></p>
            <form className="login_form" action="">
                <label htmlFor="email">Email or Username</label>
                <input type="email" name="email" className="relay_input"/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" className="relay_input"/>

                <span className="forgot_pass underlined">Forgot my password</span>

                <button className="btn btn_primary">Log in</button>
            </form>
        </AuthLayout>
    )
}

export default Login
