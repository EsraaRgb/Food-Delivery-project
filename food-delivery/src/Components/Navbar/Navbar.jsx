import React from 'react'
import { Link } from 'react-router-dom'
import style from '../Navbar/Navbar.module.css'

export default function Navbar({ loginData,logOut }) {
    console.log(loginData);
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark  py-3 position-fixed start-0 end-0 top-0 ${style.zindex} `}>
            <div className="container">
                <img src="../../images/elmenusLogo.svg" alt="" />
                {/* <Link element={<Home/>} to={'home'} /> */}
                <a className="navbar-brand fw-bold " href="#">FOOD ZONE</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {loginData ? (<ul className="navbar-nav me-auto mb-2 mb-lg-0 m-0">
                        {/* if user logged in */}

                        <li className="nav-item">
                            <Link className={`nav-link active   `} aria-current="page" to="home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link   `} to="people">People</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link    `} to="about">ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link   `} to="food">Food</Link>
                        </li>


                        <li className="nav-item">
                            <Link className={`nav-link  `} to="drinks">Drinks</Link>
                        </li>
                    </ul>) : ("")}


                    <ul className='auth-links list-unstyled d-flex m-0 ms-auto align-items-center' >
                        {loginData?<h5 className='mx-3 my-0'>Hello {loginData.first_name + ' ' + loginData.last_name}</h5>:""} 
                        {/* if we make it without if condition -> give you error because loginData is null . so, we make if condition   */}
                        <div className="social-links d-flex align-items-center text-white">
                            <i className='fab fa-facebook'></i>
                            <i className='fab fa-instagram mx-3'></i>
                            <i className='fab fa-youtube'></i>
                        </div>
                        {!loginData ? <>
                         {/*  if user not logged in this appear login , register */}
                            <li className="nav-item">
                                <Link className={`nav-link  `} to="register">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link  `} to="login">Login</Link>
                            </li>

                        </> : <li className="nav-item">
                            {/* else: user is logged in  this appear logout */}

                            <a className={`nav-link` } onClick={logOut}>Logout</a>
                        </li>}
                    </ul>

                </div>
            </div>
        </nav>
    )
}
