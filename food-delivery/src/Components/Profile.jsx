import React, { Component } from 'react';
// import userP from '../../images/userP.png';
import ReactDOM from 'react-dom/client';
import {Link} from 'react-router-dom';
class Profile extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            {/* <a className="nav-link active" aria-current="page" href="#">DELIVERY</a> */}
                            <Link to ='accountsettings'>DELIVERY</Link>

                            </li>
                            <li className="nav-item">
                            <a className="nav-link mx-4" href="#">OFFERS</a>
                            </li>
                            <li className="nav-item dropdown">
                            <li className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">     
                            </li>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Account Setting</a></li>
                                <li><a className="dropdown-item" href="#">Log Out</a></li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav> 
                <div className="ProfileBody container d-flex justify-content-center align-items-center vh-100">
                    <div className="row">
                        <div className="col-md-6" >
                            {/* <img src={userP} className="card-img-top w-75" alt="..."/> */}
                            <div class="card-body">
                                <h4 className="card-title">USER NAME</h4>
                                <a href="#" className="btn btn-primary px-4">Edit Profile</a>
                            </div>
                            </div>
                        </div>
                </div> 
            </>
        );
    }
}

export default Profile;