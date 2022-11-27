import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { addUser } from '../../api/user';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleRegister = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const role = form.role.value;

      const addNewUser = {
        name,
        email,
        role
      }
      

      createUser(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          form.reset();
          addUser(addNewUser);
          toast.success("Registration successful !");
          navigate(from, { replace: true });
        })
        .catch((err) => console.error(err));
      console.log( email, password, role);
    };

    // useTitle("SignUp");

    return (
      <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img
              className="w-3/4"
              src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4320.jpg?w=826&t=st=1666860644~exp=1666861244~hmac=6d992bd520b859c5a64d13102afca25b86fb8afa9423a6319aa8d1d8b9bec8e9"
              //   class="w-100 rounded-4 shadow-4"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
            <h1 className="text-5xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">User</span>
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    className="radio checked:bg-red-500"
                   defaultChecked
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Seller</span>
                  <input
                    type="radio"
                    name="role"
                    value='seller'
                    className="radio checked:bg-blue-500"
                    // checked
                  />
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center">
              Already have an account?{" "}
              <Link className="text-orange-600 font-bold" to="/login">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;