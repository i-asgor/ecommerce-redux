import React from 'react';

const Home = () => {
    return (
        <div className='hero'>
            <div class="card text-light">
            <img src="/assets/slider/2.png" class="card-img" alt="background" height="550px" />
            <div class="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container">
                    <h5 class="card-title display-2 fw-bolder">New Season</h5>
                    <p class="card-text lead fs-2">
                        Check out all the trends
                    </p>
                </div>                
            </div>
            </div>
        </div>
    );
};

export default Home;