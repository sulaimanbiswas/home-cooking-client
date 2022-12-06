import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useRef } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { setTitle, login, createUserProvider } = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  setTitle("Login");
  const googleProvider = new GoogleAuthProvider();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    login(email, password)
      .then(() => {
        event.target.reset();
        toast.success("Successfully Login!");
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };

  const googleSignupHandle = () => {
    createUserProvider(googleProvider)
      .then(() => {
        toast.success("Successfully Login!");
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col w-full md:w-1/2 mx-auto">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
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
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover"
                  >
                    Register
                  </Link>
                  <Link to="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6 flex gap-4">
                <button className="btn btn-outline">Login</button>
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

export default Login;
