import './Register.scss';


export function RegisterPage(){
    return (
        <div className="registerPage">
            <div className='register_form'>
                <h2>Register Account Form</h2>
                <hr />

                <label htmlFor="fullName">Full Name<input type="text" placeholder='Your Name'/></label>            
                <label htmlFor="yourEmail">Your Email<input type='email'placeholder='Your Email'/></label>            
                <label htmlFor="password">Password<input type="password" placeholder='Your Email'/></label>

                <p className='linkAuth'>Register / Login</p>
                <button>Register</button>            
            </div>

        </div>
    )
}