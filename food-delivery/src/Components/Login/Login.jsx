import axios from 'axios'
import Joi from 'joi'
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import ForgetPassword from '../ForgetPassword/ForgetPassword'
import style from './Login.module.css'

export default function Login({setUserData}) {
let [user, setUser] = useState({
    email: '',
    password: '',
})

let [errorMsg, setErrorMsg] = useState('');//to appeare in UI and talk with render function (Data From Backend)
let [errorList, setErrorList] = useState([]);//(Data From Validation)
let [loading, setLoading] = useState(false);

const navigate = useNavigate();
function goToHome(){
let path='/home';
navigate(path);
}

function validateForm() {
    const schema = Joi.object({
        email: Joi.string().required().email({ tlds: { allow: ['com', 'net'] } }),
        password: Joi.string().required().pattern(new RegExp('^[a-z][0-9]{3}$')),

    })
    return schema.validate(user, { abortEarly: false });
}
async function submitFormData(e) {
    e.preventDefault();
    setLoading(true);
    let validateResult = validateForm();
    console.log(validateResult);
    if (validateResult.error) {
        setErrorList(validateResult.error.details);
        setLoading(false);
    }
    else {
        let { data } = await axios.post('https://routeegypt.herokuapp.com/signin', user);
        console.log(data);
        if (data.message == 'success') {
            localStorage.setItem('token',data.token); /// Step 1
            setUserData();//// here call setUserData function 
            goToHome();
        }
        else {
            setErrorMsg(data.message);
        }
        setLoading(false);
    }

}
function goToForgetPassWord(){
    let path='/forgetPassword';
    navigate(path);
}
function getFormValue(e) {
    let myUser = { ...user }
    myUser[e.target.name] = e.target.value
    setUser(myUser);// update user data
    console.log(myUser)
}
return (
    <>
        <div className='d-flex justify-content-center align-items-center my-5  '>
        <div className={`w-50  p-5  bg-light overflow-auto ${style.form}`}>
            <h1 className='my-4 text-center text-dark'>Login </h1>
            {errorMsg ? <div className="alert alert-danger p-2">{errorMsg}</div> : ''}
            {errorList.map((error, index) => <div className="alert alert-danger p-2">{error.message}</div>)}
            <form onSubmit={submitFormData}>
                <div className="input-gp my-3">
                    <input onChange={getFormValue} type='email' className="form-control my-2" name='email'placeholder='email' />
                </div>
                <div className="input-gp my-3">
                    
                    <input onChange={getFormValue} type='password' className='form-control my-2' name='password'placeholder='password' />
                </div>
                <div className='d-flex justify-content-center my-3'>
                    <button className={style.loginButton} type='submit'>
                    {loading ? <i className='fa fa-spinner fa-spin'></i> : 'Login'}
                    </button>
                </div>
                <div className="clearfix"></div>
                <Link onClick={goToForgetPassWord} className={`text-decoration-none d-flex justify-content-center  ${style.ForgetPassword}`} to='forgetPassword'>Forgot password?</Link>
                <div className='clearfix'></div>
            </form>
        </div>

        </div>
        <div className='clearfix'></div>
            
    </>

)}
