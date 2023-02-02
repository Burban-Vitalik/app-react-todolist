import React, {useEffect ,useState } from 'react';
import './Register.scss';

type UserType = {
    id: number | string
    fullName: string
    email: string
    password: string | number
}

export function RegisterPage(){    
    let users = localStorage.getItem('arrNewUsers') ? JSON.parse(localStorage.getItem('arrNewUsers') || '') : [];

    const [arrNewUsers, setArrNewUsers] = useState(users);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onChangeFullName(e:any){
        setFullName(e.target.value);
    }

    function onChangeEmail(e:any){        
        setEmail(e.target.value);
    }

    function onChangePassword(e:any){
        setPassword(e.target.value);
    }

    function createNewUser(){
        let newUser:UserType = {
            id: Math.random(),
            fullName: fullName,
            email: email,
            password: password,
        }
        
        arrNewUsers.map((el:any)=> el.email).includes(newUser.email)?
        console.log('is'): users.push(newUser); setArrNewUsers([...users]);  
            
        setFullName('')
        setEmail('')
        setPassword('')
    }

    useEffect(()=>{
        localStorage.setItem('arrNewUsers', JSON.stringify(arrNewUsers))
    }, [arrNewUsers])

    return (
        <div className="registerPage">
            <div className='register_form'>
                <h2>Register Account Form</h2>
                <hr />

                <label htmlFor="fullName">Full Name<input type="text" placeholder='Your Name' value={fullName} onChange={onChangeFullName}/></label>  
                <label htmlFor="yourEmail">Your Email<input type='email' className='emailIntput' placeholder='Your Email' value={email} onChange={onChangeEmail}/></label>            
                <label htmlFor="password">Password<input type="password" placeholder='Your Password'value={password} onChange={onChangePassword}/></label>

                <p className='linkAuth'>Register / Login</p>
                <button onClick={createNewUser}>Register</button>            
            </div>
        </div>
    )
}