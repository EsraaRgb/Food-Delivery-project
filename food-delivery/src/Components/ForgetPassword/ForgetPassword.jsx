import React, { useState } from 'react'
import style from './ForgetPassword.module.css'
import axios from 'axios';
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';
export default function ForgetPassword() {
    let [email, setEmail] = useState('');
    
    let [errorMsg, setErrorMsg] = useState('');//to appeare in UI and talk with render function (Data From Backend)
    let [errorList, setErrorList] = useState([]);//(Data From Validation)
    let [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();
    
    // function validateForm() {
    //     const schema = Joi.object({
    //         email: Joi.string().required().email({ tlds: { allow: ['com', 'net'] } })
    //     })
    //     return schema.validate(email);
    // }
    async function submitFormData(e) {
        // e.preventDefault();
        // setLoading(true);
        // let validateResult = validateForm();
        // console.log(validateResult);
        // if (validateResult.error) {
        //     setErrorList(validateResult.error.details);
        //     setLoading(false);
        // }
        // else {
        //     let { data } = await axios.post('https://routeegypt.herokuapp.com/signin', email);
        //     console.log(data);
        //     if (data.message == 'success') {
        //         localStorage.setItem('token',data.token); /// Step 1
        //         setEmail();//// here call setUserData function 
        //         //goToLogin();
        //     }
        //     else {
        //         setErrorMsg(data.message);
        //     }
        //     setLoading(false);
        // }
    
    }
    function getFormValue(e) {
        let myEmail = email;
        // myEmail= e.target.value
        // setEmail(myEmail);// update user data
        // console.log(myEmail);
    }
return (
    <>

            <div className={`w-50 m-auto  p-5  bg-light overflow-auto  ${style.form}`}>
                <h1 className='my-4 text-center text-dark'>forget password </h1>
                {errorMsg ? <div className="alert alert-danger p-2">{errorMsg}</div> : ''}
                {errorList.map((error, index) => <div className="alert alert-danger p-2">{error.message}</div>)}
                <form onSubmit={submitFormData}>
                    <div className="input-gp my-3">
                        <input onChange={getFormValue} type='email' className="form-control my-2" name='email'placeholder='email' />
                    </div>
                    <div className='d-flex justify-content-center my-3'>
                    <button className={style.loginButton} type='submit'>
                    {loading ? <i className='fa fa-spinner fa-spin'></i> : 'Submit'}
                    </button>
                </div>
                </form>
            </div>

    </>
)
}
