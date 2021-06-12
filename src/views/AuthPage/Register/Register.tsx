import React, {useState} from 'react';
import { useHistory } from 'react-router';
import { auth } from '../../../config/firebase';
import logging from '../../../config/logging';
import AuthLayout from '../../../shared/AuthLayout/AuthLayout';
import './Register.css'

interface Props{
name: string
}
const RegisterPage = ({ name }: Props) => {

    const [registering, setRegistering] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirm, setConfirm] = useState<string>('');
    const [error, setError] = useState<string>('');

    const history = useHistory();
    
    const signUpWithEmailAndPassword = () => {
        if (password !== confirm) setError('Please make sure your passwords match.')

        if (error !== '') setError('');
        
        setRegistering(true);
        
        auth.createUserWithEmailAndPassword(email, password)
            .then(res => {
                logging.info(res)
                history.push('/login')
            })
            .catch(error =>{
                logging.error(error)

                if(error.code.includes('auth/weak-password')){
                    setError('Your password should hava at least 8 characters, 1 Uppercase and numbers.')
                
                }
                else if(error.code.includes('auth/weak-password')){
                    setError('theres and active acount linked to this email')
                }

                else{
                    setError('Unable to Register, please try again')
                }

                setRegistering(false)
            })
    }

    return(
        <AuthLayout>
            <p className="message">you already have an account <span className="primary_color underlined">click here</span></p>
            <form className="login_form" action="">
                
            <label htmlFor="username">Username</label>
                <input type="text" name="username" className="relay_input" placeholder="jhonyleon21e"/>

                <label htmlFor="FullName">Full Name</label>
                <input type="text" name="FullName" className="relay_input" placeholder="Jhon Lennon W."/>
                
                <label htmlFor="email">Email</label>
                <input type="email" name="email" className="relay_input" placeholder="Hello@Example.com"/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" className="relay_input" placeholder="*************"/>
                
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" className="relay_input" placeholder="*************"/>

                <span className="termsandservice">By creating an account, you agree to the <span className="primary_color underlined">RelayBox</span> Customer Terms of Service and Privacy Policy</span>

                <button className="btn btn_primary">Register</button>
            </form>
        </AuthLayout>
    )
}

export default RegisterPage;