import axios from 'axios';
import React, { Component } from 'react';
import style from './User.module.css'

class User extends Component {
    state={
        recipes:[]
    }
    getMenue=async()=>{
        let {data} = await axios.get("https://forkify-api.herokuapp.com/api/search?q=pizza");
        this.setState({recipes:data.recipes});
        console.log(this.state.recipes);
    }
    componentDidMount(){
        this.getMenue();
    }
    render() {
        return (
            <>
            <div className="home vh-100 container" >
                {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-solid fa-circle-user fs-4"></i>
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider"/></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> */}
                <div className="container py-5 my-5">
                    <div className="row px-5 py-5 my-4">
                        <div className="col-md-7">
                            <h1 style={style.h1}>Fried chicken sandwiches and chocolate</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recipes">
                <div className="container">
                    <div className="row">
                        {this.state.recipes.map((recipe)=>{
                        <div className="col-md-3">
                            <div className="recipe">
                                <img src={recipe.image_url} alt="" srcset="" />
                                <h5>{recipe.title}</h5>
                            </div>
                        </div>
                    })}
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default User;