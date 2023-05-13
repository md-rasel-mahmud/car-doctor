import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaUser, FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const navigation = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      {!user && (
        <li>
          <Link className="text-secondary" to="/login">
            Login
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar max-w-[90%] sticky top-0 z-10 mx-auto my-5 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navigation}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} className="w-14" alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navigation}</ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <>
            <div className="tooltip tooltip-bottom" data-tip={user.displayName ? user.displayName : user.email}>
              <Link to="#" className="btn text-xl btn-secondary btn-circle">
                <FaUserAlt />
              </Link>
            </div>
            <button onClick={logout} className="btn btn-outline btn-secondary">
              Log out
            </button>
          </>
        ) : (
          <Link to="/" className="btn btn-outline btn-secondary">
            Appointment
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
