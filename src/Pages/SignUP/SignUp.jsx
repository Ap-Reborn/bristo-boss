// import React from 'react';
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
  }
  console.log(watch("example"));
   return (
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
          <input {...register("name",{ required: true })} type="text" placeholder="name" className="input input-bordered" />
          {errors.name && <span className="text-red-600">name is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email",{required:true})} type="email" placeholder="email" className="input input-bordered" />
          {errors.name && <span className="text-red-600">name is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          <input {...register("password",{ required: true,minLength:6, maxLength: 20 })} type="text" placeholder="password" className="input input-bordered" />
          {errors.password?.type === 'required' && <p className="text-red-600" role="alert">password is required</p>}
          </label>

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;