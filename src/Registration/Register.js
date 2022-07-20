import React from 'react';

const Register = () => {
    return (
        <div className='container w-25 my-5'>
            <main class="form-signin w-100 m-auto">
            <form>
                <h1 class="h3 mb-3 fw-normal">Please sign Up</h1>

                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Mr.test" />
                    <label for="floatingInput">Your Name</label>
                </div>
                <div class="form-floating my-2">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-2">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
            </form>
            </main>
        </div>
    );
};

export default Register;