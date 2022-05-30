import React, { Component } from 'react';
class AccountSetting extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <h2 className='text-center fw-bolder'>Account Setting</h2>
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                    </ul> 
                </div> 
            </>
        );
    }
}

export default AccountSetting;