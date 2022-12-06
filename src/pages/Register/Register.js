import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useRef } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { setTitle, createUser, createUserProvider } = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  setTitle("Register");

  const signupHandle = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUser(email, password)
      .then(() => {
        event.target.reset();
        toast.success("Successfully Login!");
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };

  const googleSignupHandle = () => {
    createUserProvider(googleProvider)
      .then(() => {
        toast.success("Successfully Login!");
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col w-full md:w-1/2 mx-auto">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Register Here</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={signupHandle}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  ref={passwordRef}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    Login
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6 flex gap-4">
                <button className="btn btn-outline">Register</button>
              </div>
            </form>
            <button className="btn btn-outline" onClick={googleSignupHandle}>
              <FcGoogle className="mr-2" /> Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
