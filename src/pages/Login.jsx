import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {

  const {loginWithManual} = useContext(AuthContext);
  const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        loginWithManual(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          alert('login successfully')
          form.reset()
          navigate('/')
        })
        .catch(error => console.log(error.message))

    }

  return (
    <div className="bg-base-200">
      <div className="hero min-h-screen max-w-screen-[90%] mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <img src={loginImg} className="max-w-sm rounded-lg shadow-2xl" />

          <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className="text-center text-4xl mt-5 font-bold">Login</h2>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                <label className="label">
                    Don't have an account? 
                  <Link to='/sign-up' className="label-text font-bold text-secondary link link-hover">
                    Sign Up
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-secondary">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
