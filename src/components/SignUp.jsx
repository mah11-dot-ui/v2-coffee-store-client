import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2'

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const handleSignUp = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log('form signup', name, email, password)

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                const createdAt = result?.user?.metadata?.creationTime;
                const newUser = {
                    name,
                    email,
                    createdAt
                }
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId > 0) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'user added successfully',
                                icon: 'success',
                                confirmButtonText: 'OK'
                            })
                        }
                    })
                    .catch(error => console.log('error creating user in db', error))
            }
            )
            .catch(errror => console.log(errror))
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 p-9 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSignUp}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" className="input" placeholder="name" name='name' />
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="email" name='email' />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="password" name='password' />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button type="submit" className="btn btn-primary mt-4">Sign up</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;