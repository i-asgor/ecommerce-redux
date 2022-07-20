import React from 'react';
import { NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div class="container">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
            <div class="col mb-3">
            <NavLink to="/" class="d-flex align-items-center mb-3 lead text-bolder text-dark text-decoration-none">
            E-Commerce

            </NavLink>
            <p class="text-muted">© 2022</p>
            </div>

            <div class="col mb-3">

            </div>

            <div class="col mb-3">
            <ul class="nav flex-column">
                <li class="nav-item mb-2"><NavLink to="#" class="nav-link p-0 text-muted">Home</NavLink></li>
                <li class="nav-item mb-2"><NavLink to="#" class="nav-link p-0 text-muted">Features</NavLink></li>
                <li class="nav-item mb-2"><NavLink to="#" class="nav-link p-0 text-muted">Pricing</NavLink></li>
                <li class="nav-item mb-2"><NavLink to="#" class="nav-link p-0 text-muted">FAQs</NavLink></li>
                <li class="nav-item mb-2"><NavLink to="#" class="nav-link p-0 text-muted">About</NavLink></li>
            </ul>
            </div>

            <div class="col mb-3">
            <ul class="nav flex-column">
                <li class="nav-item mb-2"><NavLink to="#" class="nav-link p-0 text-muted">Home</NavLink></li>
                <li class="nav-item mb-2"><NavLink to="#" class="nav-link p-0 text-muted">Features</NavLink></li>
                <li class="nav-item mb-2"><NavLink to="#" class="nav-link p-0 text-muted">Pricing</NavLink></li>
                <li class="nav-item mb-2"><NavLink to="#" class="nav-link p-0 text-muted">FAQs</NavLink></li>
                <li class="nav-item mb-2"><NavLink to="#" class="nav-link p-0 text-muted">About</NavLink></li>
            </ul>
            </div>

            <div class="col mb-3">
            <ul class="nav flex-column">
                <li class="nav-item mb-2"><NavLink to="#" class="nav-link p-0 text-muted">Home</NavLink></li>
                <li class="nav-item mb-2"><NavLink to="#" class="nav-link p-0 text-muted">Features</NavLink></li>
                <li class="nav-item mb-2"><NavLink to="#" class="nav-link p-0 text-muted">Pricing</NavLink></li>
                <li class="nav-item mb-2"><NavLink to="#" class="nav-link p-0 text-muted">FAQs</NavLink></li>
                <li class="nav-item mb-2"><NavLink to="#" class="nav-link p-0 text-muted">About</NavLink></li>
            </ul>
            </div>
        </footer>
        </div>
    );
};

export default Footer;