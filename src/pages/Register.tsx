import {useEffect ,useState } from 'react';
import {ErrorAlert, SuccessAlert} from '../common/Alerts';
import { User } from '../interfaces/usersInterface';
import { createUser, getAllUsers } from '../services/userService';
import './Register.scss';

export function RegisterPage(){  
    let allUsers = getAllUsers();

    const [arrUsers, setArrUsers] = useState(allUsers);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Validation
    const [fullNameError, setFullNameError] = useState(null || String);
    const [emailError, setEmailError] = useState(null || String);
    const [passwordError, setPasswordError] = useState(null || String);

    const [emptyFields, setEmptyFields] = useState(false);
    const [successRegister, setSuccessRegister] = useState(false)
    const [allertError, setAllertError] = useState('');  
    
    
    function onChangeFullName(e:any){
        setFullName(e.target.value)

        if(!e.target.value){
            setFullNameError('Required')
        } else {
            if (e.target.value.length < 3 || e.target.value.length > 12 ){
                setFullNameError('too small or too big')
            } else {
                setFullNameError('')
            }
        }
    }

    function onChangeEmail(e:any){        
        setEmail(e.target.value);

        if(!e.target.value) {
            setEmailError('Required')
        } else {
            setEmailError('');

            if(/\S+@\S+\.\S+/.test(e.target.value)){
                setEmailError('')
            } else {
                setEmailError('Email is invalid')
            }
        }

    }

    function onChangePassword(e:any){
        setPassword(e.target.value);

        if(!e.target.value){
            setPasswordError('Required')
        } else {
            setPasswordError('')

            if (e.target.value.length < 3 || e.target.value.length > 12 ){
                setPasswordError('Length of password mast be 3-12')
            } else {
                setPasswordError('')
            }
        }    }

        
    function createNewUser(){
        let newUser:User = {
            id: Math.random(),
            fullName: fullName,
            email: email,
            password: password,
        }
        
        if(!newUser.fullName || !newUser.email || !newUser.password){
            setEmptyFields(true)
            setAllertError('Заповніть усі поля форми!')
            setTimeout(() => {
                setEmptyFields(false)
            },3000)
        } else {

            if(fullNameError || emailError || passwordError) {
                setEmptyFields(true)
                setAllertError('Поля форми заповнені невірно!')
                setTimeout(() => {
                    setEmptyFields(false)
                },3000)
                } else {
                setSuccessRegister(true)
                setTimeout(()=> {
                    setSuccessRegister(false)
                },3000)
                setArrUsers(createUser(newUser));      
                setFullName('');
                setEmail('');
                setPassword(''); 
            }
        }
    }

    useEffect(()=>{
        localStorage.setItem('arrNewUsers', JSON.stringify(arrUsers))
    }, [arrUsers])

    return (
        <div className="registerPage">
            <div className='register_form'>
                {emptyFields === true ? 
                    <ErrorAlert message={allertError} /> : successRegister === true ? <SuccessAlert /> : ''
                }
                
                <h2>Register Account Form</h2>
                <hr />
                
                <label htmlFor="fullName">
                    Full Name
                    <input type="text" placeholder='Your Name' value={fullName} onChange={onChangeFullName} style={fullNameError ? {border:'1px solid red'}:{border:'1px solid green'}} />
                    <span className='error'>{fullNameError}</span>
                </label> 

                <label htmlFor="yourEmail">
                    Your Email
                    <input type='email' className='emailIntput' placeholder='Your Email' value={email} onChange={onChangeEmail} style={emailError ? {border:'1px solid red'}:{border:'1px solid green'}}/>
                    <span className='error'>{emailError}</span>
                </label>  

                <label htmlFor="password">
                    Password
                    <input type="password" placeholder='Your Password'value={password} onChange={onChangePassword} style={passwordError ? {border:'1px solid red'}:{border:'1px solid green'}}/>
                    <span className='error'>{passwordError}</span>
                </label>
                <p className='linkAuth'>Register / Login</p>
                <button onClick={createNewUser}>Register</button>            
            </div>
        </div>
    )
}