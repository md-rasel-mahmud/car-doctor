import { Link } from "react-router-dom";
import signUpImg from "../assets/images/login/login.svg";

const SignUp = () => {

    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target;

        const name = form.name.value;
        const email= form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirmPass.value;

        form.reset()

        console.log(name, email, password, confirmPass);
    }

  return (
    <div className="bg-base-200">
      <div className="hero min-h-screen max-w-screen-[90%] mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <img src={signUpImg} className="max-w-sm rounded-lg shadow-2xl" />

          <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className="text-center text-4xl mt-5 font-bold">Sign Up</h2>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
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
                  type="text"
                  placeholder="Password"
                  className="input input-bordered"
                  name="password"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                  name="confirmPass"
                />
                <label className="label">
                  Don't have an account?
                  <Link
                    to="/login"
                    className="label-text font-bold text-secondary link link-hover"
                  >
                    Login
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-secondary">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
