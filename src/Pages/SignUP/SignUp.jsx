// import React from 'react';
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate()
  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            // console.log('user profile info updated')
            const saveUser = { name: data.name, email: data.email }
            fetch('http://localhost:5000/users', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
              .then(res => res.json())
              .then(data => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/')

                }
              })
          })
          .catch(error => console.log(error))
      })
  }
  console.log(watch("example"));
  return (
    <>
      <Helmet>
        <title>Bristo | sign up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input {...register("name", { required: true })} type="text" placeholder="name" className="input input-bordered" />
                {errors.name && <span className="text-red-600">name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input {...register("photoURL", { required: true })} type="text" placeholder="photo url" className="input input-bordered" />
                {errors.photoURL && <span className="text-red-600">photo url is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                {errors.name && <span className="text-red-600">name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                })} type="password" placeholder="password" className="input input-bordered" />
                {errors.password?.type === 'required' && <p className="text-red-600" role="alert">password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-600" role="alert">password must be 6 charecter</p>}
                {errors.password?.type === 'maxLength' && <p className="text-red-600" role="alert">password must be less than 20 character</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-600" role="alert">password must be one uppercase one lowarcase onenumber and one special ceracter</p>}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value='sign up' />
              </div>
            </form>
            <p><small>Already Have An Account <Link to='/login'>log in</Link></small></p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;