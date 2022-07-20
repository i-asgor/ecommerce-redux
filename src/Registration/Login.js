import React from 'react';

const Login = () => {
    return (
        <div className='container w-25 my-5'>
            <main class="form-signin w-100 m-auto">
            <form>
                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mt-2">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
                </div>

                <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
            </main>
        </div>
    );
};

export default Login;