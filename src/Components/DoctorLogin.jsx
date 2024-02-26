import Navbar from "./Navbar";
import illustrate13 from "../assets/illustrate13.svg";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const DoctorLogin = () => {
  return (
    <>
      <Navbar />
      <div className="px-10 py-8 bg-slate-100 dark:bg-slate-800 shadow-lg shadow-gray-600">
        <div className="head-banner flex flex-col md:flex-row p-5 w-full h-auto bg-violet-800 rounded-2xl items-center justify-center">
          <div className="max-w-md w-full space-y-8 bg-white p-5 rounded-lg">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-violet-600">
                Doctor Log in
              </h2>
            </div>
            <form className="mt-8 space-y-6">
              <div>
                <input
                  id="username"
                  name="username"
                  type="email"
                  autoComplete="username"
                  required
                  className="mt-1 p-3 block w-full border-2 border-violet-600 rounded-md placeholder-violet-600 text-violet-600 outline-none font-bold"
                  placeholder="Email ID"
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-1 p-3 block w-full border-2 border-violet-600 rounded-md placeholder-violet-600 text-violet-600 outline-none font-bold"
                  placeholder="Password"
                />
              </div>
              <div>
                <Link
                  to="/ForgotPassword"
                  className="text-sm text-violet-600 hover:text-violet-900 font-bold"
                >
                  Forgot Password?
                </Link>
                <button
                  type="submit"
                  className="w-full mt-2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Log in
                </button>
              </div>
            </form>
            <div className="text-center">
              <p className="mt-2 text-sm text-gray-600">
                Or <br />
                <br /> Don&apos;t have an Account?{" "}
                <Link to="/DoctorRegister">
                  <button className="font-medium text-indigo-600 hover:text-indigo-500">
                    Register
                  </button>
                </Link>
              </p>
            </div>
          </div>
          <div className="w-full md:w-[50%] flex flex-col items-center">
            <img src={illustrate13} className="w-[500px]" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DoctorLogin;
