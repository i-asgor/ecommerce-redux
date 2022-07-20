import React from 'react';
import Products from './Products';

const Home = () => {
    return (
        <div className='hero'>
            <div className="card text-white">
            <img src="/assets/slider/2.png" className="card-img" alt="background" height="550px" />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container">
                    <h5 className="card-title display-2 fw-bolder">New Season</h5>
                    <p className="card-text lead fs-2">
                        Check out all the trends
                    </p>
                </div>                
            </div>
            </div>
            <Products />
        </div>
    );
};

export default Home;