import React, { useState } from 'react'
import axios from 'axios';
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';
import style from './Register.module.css'

export default function Register() {
    let [user, setUser] = useState({
        first_name: '',
        last_name: '',
        age: '',
        email: '',
        password: '',
    })

    let [errorMsg, setErrorMsg] = useState('');//to appeare in UI and talk with render function
    let [errorList, setErrorList] = useState([]);
    let [loading, setLoading] = useState(false);
const navigate = useNavigate();
function goToLogin(){
    let path='/login';
    navigate(path);
}

    function validateForm() {
        const schema = Joi.object({
            first_name: Joi.string().alphanum().required().min(3).max(5),
            last_name: Joi.string().alphanum().required().min(3).max(5),
            age: Joi.number().required().min(20).max(80),
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
            let { data } = await axios.post('https://routeegypt.herokuapp.com/signup', user);
            console.log(data);
            if (data.message === 'success') {
                goToLogin();
            }
            else {
                setErrorMsg(data.message);
            }
            setLoading(false);
        }

    }
    function getFormValue(e) {
        let myUser = { ...user }
        myUser[e.target.name] = e.target.value;
        setUser(myUser);// update user data
        console.log(myUser)
    }
    return (
        <>
            <div className={`w-50 text-dark m-auto p-5 rounded-3 bg-light overflow-auto  $ {style.form}`}>
                <h1 className='my-4 text-center'>Registeration</h1>
                {errorMsg ? <div className="alert alert-danger p-2">{errorMsg}</div> : ''}
                {errorList.map((error, index) => <div className="alert alert-danger p-2">{error.message}</div>)}
                <form onSubmit={submitFormData}>
                    <div className="input-gp my-3">
                        {/* <label htmlFor='first_name'>First Name:</label> */}
                        <input onChange={getFormValue} type='text' className='form-control my-2' name='first_name' placeholder='First Name' />
                    </div>
                    <div className="input-gp my-3">
                        {/* <label htmlFor='last_name'>Last Name:</label> */}
                        <input onChange={getFormValue} type='text' className='form-control my-2' name='last_name' placeholder='Last Name' />
                    </div>
                    <div className="input-gp my-3">
                        {/* <label htmlFor='age'>Age:</label> */}
                        <input onChange={getFormValue} type='number' className='form-control my-2' name='age' placeholder='Age' />
                    </div>

                    <div className="input-gp my-3">
                        {/* <label htmlFor='email'>Email:</label> */}
                        <input onChange={getFormValue} type='email' className='form-control my-2' name='email' placeholder='Email' />
                    </div>
                    <div className="input-gp my-3">
                        {/* <label htmlFor='password'>Password:</label>
                        onChange={getFormValue}
                        */}
                        <input  type='text' className='form-control my-2' name='address' placeholder='Address' />
                    </div>
                    <div className="input-gp my-3">
                        {/* <label htmlFor='password'>Password:</label> */}
                        <input onChange={getFormValue} type='password' className='form-control my-2' name='password' placeholder='Password' />
                    </div>
                    
                    <div className='d-flex justify-content-center '>
                        <button className={style.registerButton} type='submit'>
                            {loading ? <i className='fa fa-spinner fa-spin'></i> : 'Register'}
                        </button>
                    </div>
                    <div className='clearfix'></div>
                </form>
            </div>
        </>
    )
}
