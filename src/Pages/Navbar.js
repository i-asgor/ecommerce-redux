import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand fw-bold fs-4" href="#">
                        E-Commerce
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Products</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                   <div className="buttons">
                    <a href="" className='btn btn-outline-light'>
                        <i className="fa fa-sign-in"><span className='ms-1'>Sign In</span></i>
                    </a>
                    <a href="" className='btn btn-outline-light ms-2'>
                        <i className="fa fa-user-plus"><span className='ms-1'>Sign Up</span></i>
                    </a>
                    <a href="" className='btn btn-outline-light ms-2'>
                        <i className="fa fa-shopping-cart"><span className='ms-1'>Cart (0)</span></i>
                    </a>
                   </div>
                    </div>
                </div>
                </nav>
        </div>
    );
};

export default Navbar;