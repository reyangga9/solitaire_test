import React, { useState } from "react";
import hide from "../icons/hide.svg";
import show from "..//icons/show.svg";
import { NavLink, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  let emailHandler = (e) => {
    setEmail(e.target.value);
  };

  let passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  let showPasswordHandler = () => {
    if (showPassword === true) {
      return "password";
    } else {
      return "text";
    }
  };
  let visibility = (e) => {
    e.preventDefault();
    if (showPassword === true) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  let postSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      console.log(!result.error);
      if (result.error === undefined) {
        navigate("/");
      } else {
        alert("Error " + result.error);
        alert(
          "Use This example for register successfully email: eve.holt@reqres.in, password: pistol"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
        <div class="flex items-center mb-6 text-2xl font-semibold  text-cyan-600">
          <img
            className="w-8 h-8 mr-2"
            src="https://clipart-library.com/images/kiKo9BA4T.png"
            alt="logo"
          />
          <NavLink to="/dashboard">Regent's Park</NavLink>
        </div>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up
            </h1>
            <form
              class="space-y-4 md:space-y-6"
              action="#"
              onSubmit={postSignUp}
            >
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={emailHandler}
                  value={email}
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-3.5 "
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <div className="flex bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  w-full p-2.5  max-w-lg relative">
                  <input
                    type={showPasswordHandler()}
                    name="password"
                    value={password}
                    onChange={passwordHandler}
                    id="password"
                    className="bg-transparent w-3/4 p-1 focus:outline-none "
                    required
                  />
                  <button
                    className="absolute max-w-[30px]  right-0 max-h-[30px] "
                    onClick={visibility}
                  >
                    <img alt="gmbr" src={showPassword ? show : hide} />
                  </button>
                </div>
              </div>

              <button
                type="submit"
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Want to check our websiste?{" "}
                <p class="font-medium inline text-primary-600 hover:underline dark:text-primary-500">
                  <NavLink to="/">Home</NavLink>
                </p>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
