import axios from 'axios'
import Joi from 'joi'
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import style from '../Login/Login.module.css'

export default function AddDish({ setDishData }) {

  return (
    <>
      <div>
      <div className='d-flex justify-content-center align-items-center   '>
        <div className={`w-70  p-5  bg-light overflow-auto ${style.form}`}>
          <form >
            <div className="input-gp my-3">
              <input type='text' className="form-control my-2" name='name' placeholder='name' />
            </div>
            <div className="input-gp my-3">
              <input type='text' className='form-control my-2' name='description' placeholder='description' />
            </div>
            <div className="input-gp my-3">
              <input type='text' className="form-control my-2" name='category' placeholder=' category' />
            </div>
            <div className="input-gp my-3">
              <input type='number' className="form-control my-2" name='price' placeholder=' price' />
            </div>
            
            <div className={`input-gp my-3 `} >
              <input type='file' onchange="readURL(this)" accept="Image/*" />
            </div>
            <div className='d-flex justify-content-center my-3'>
              <button className={style.loginButton} type='submit'>ADD</button>
            </div>
          </form>
        </div>

      </div>
      </div>
    </>
  )
}