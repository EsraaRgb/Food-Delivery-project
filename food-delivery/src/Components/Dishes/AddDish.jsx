import axios from 'axios'
import Joi from 'joi'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../Login/Login.module.css'

export default function AddDish({ setDishData }) {
  let [dish, setDish] = useState({
    name: '',
    category: '',
    price: '',
    img: '',
  })
  let [errorMsg, setErrorMsg] = useState('');
  let [errorList, setErrorList] = useState([]);
  let [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  function goToDishes() {
    let path = '/admin/dishes';
    navigate(path);
  }
  function validateForm() {
    const schema = Joi.object({
      name: Joi.string().alphanum().required().min(3).max(10),
      category: Joi.string().alphanum().required().min(3).max(10),
      price: Joi.number().required().min(5).max(100),
      img: Joi.required(),

    })
    return schema.validate(dish, { abortEarly: false });
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
      let { data } = await axios.post(/*'https://routeegypt.herokuapp.com/signup',*/ dish);
      console.log(data);
      if (data.message === 'success') {
        goToDishes();
      }
      else {
        setErrorMsg(data.message);
      }
      setLoading(false);
    }

  }
  function getFormValue(e) {
    let myDish = { ...dish }
    myDish[e.target.name] = e.target.value;
    setDish(myDish);// update user data
    console.log(myDish)
  }
  return (
    <>
      <div>
        <div className='d-flex justify-content-center align-items-center   '>
          <div className={`w-70  p-5  bg-light overflow-auto ${style.form}`}>
            <h1 className='my-4 text-center '>Add Dish</h1>

            {errorMsg ? <div className="alert alert-danger p-2">{errorMsg}</div> : ''}
            {errorList.map((error, index) => <div className="alert alert-danger p-2">{error.message}</div>)}
            <form onSubmit={submitFormData}>
              <div className="input-gp my-3">
                <input onChange={getFormValue} type='text' className="form-control my-2" name='name' placeholder='name' />
              </div>
              <div className="input-gp my-3">
                <input onChange={getFormValue} type='text' className='form-control my-2' name='description' placeholder='description' />
              </div>
              <div className="input-gp my-3">
                <input onChange={getFormValue} type='text' className="form-control my-2" name='category' placeholder=' category' />
              </div>
              <div className="input-gp my-3">
                <input onChange={getFormValue} type='number' className="form-control my-2" name='price' placeholder=' price' />
              </div>

              <div className={`input-gp my-3 `} >
                <input onChange={getFormValue} type='file' onchange="readURL(this)" accept="Imprice/*" />
              </div>
              <div className='d-flex justify-content-center my-3'>
                <button className={style.registerButton} type='submit'>
                  {loading ? <i className='fa fa-spinner fa-spin'></i> : 'ADD'}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}