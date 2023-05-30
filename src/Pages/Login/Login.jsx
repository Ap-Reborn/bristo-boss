// import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
  const captchaRef=useRef(null);
  const [disable,setDisabled]=useState(true); 
  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])
const handleLogin=event =>{
  event.preventDefault();
  const form = event.target;
  const email =form.email.value;
  const password =form.password.value;
  console.log(email,password);
}   
const handleCaptcha= ()=>{
const user_captcha_value=captchaRef.current.value;
if(validateCaptcha(user_captcha_value)){
  setDisabled(false);
}
// else ta comment korlam karon ata by default hoba.
// else{
//   setDisabled(true);
// }
} 
    return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input ref={captchaRef} type="text" name="captcha" placeholder="type your captcha" className="input input-bordered" />
          <button onClick={handleCaptcha} className="btn btn-outline btn-xs mt-2">Validate</button>
          <label className="label">
          </label>
        </div>
        <div className="form-control mt-6">
          <input disabled={disable} className="btn btn-primary" type="submit" value='login' />
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;