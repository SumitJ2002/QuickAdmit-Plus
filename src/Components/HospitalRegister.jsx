import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import illustrate12 from "../assets/illustrate12.svg";
import Footer from "./Footer";

const HospitalRegister = () => {
  return (
    <>
      <Navbar />
      <div className="px-10 py-8 bg-slate-100 dark:bg-slate-800 shadow-lg shadow-gray-600">
        <div className="head-banner flex flex-col md:flex-row p-5 w-full h-auto bg-violet-800 rounded-2xl items-center justify-center">
          <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 rounded-md">
            <div className="max-w-md w-full space-y-8">
              <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-violet-600">
                  Hospital Register
                </h2>
              </div>
              <form className="mt-8 space-y-6">
                <div className="flex flex-row space-x-3">
                  <input
                    id="hospitalName"
                    name="hospitalName"
                    type="text"
                    autoComplete="hospitalName"
                    required
                    className="p-3 block w-full border-2 border-violet-600 rounded-md placeholder-violet-600 text-violet-600 outline-none font-bold"
                    placeholder="Hospital Name"
                  />
                  <input
                    id="hospitalCity"
                    name="hospitalCity"
                    type="text"
                    autoComplete="hospitalCity"
                    required
                    className="p-3 block w-full border-2 border-violet-600 rounded-md placeholder-violet-600 text-violet-600 outline-none font-bold"
                    placeholder="Hospital City"
                  />
                </div>
                <div className="flex flex-row space-x-3">
                  <input
                    id="district"
                    name="district"
                    type="text"
                    autoComplete="district"
                    required
                    className="mt-1 p-3 block w-full border-2 border-violet-600 rounded-md placeholder-violet-600 text-violet-600 outline-none font-bold"
                    placeholder="District"
                  />
                  <input
                    id="state"
                    name="state"
                    type="text"
                    autoComplete="state"
                    required
                    className="mt-1 p-3 block w-full border-2 border-violet-600 rounded-md placeholder-violet-600 text-violet-600 outline-none font-bold"
                    placeholder="State"
                  />
                </div>
                <div className="flex flex-row space-x-3">
                  <input
                    type="text"
                    list="hospitalType"
                    name="hospitalType"
                    className="mt-1 p-3 block w-full border-2 border-violet-600 rounded-md placeholder-violet-600 text-violet-600 outline-none font-bold"
                    placeholder="Hospital Type"
                  />
                  <datalist id="hospitalType">
                    <option value="Government">Government</option>
                    <option value="Private">Private</option>
                  </datalist>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    autoComplete="phone"
                    required
                    className="mt-1 p-3 block w-full border-2 border-violet-600 rounded-md placeholder-violet-600 text-violet-600 outline-none font-bold"
                    placeholder="Mobile No."
                  />
                </div>
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
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
                    autoComplete="password"
                    required
                    className="mt-1 p-3 block w-full border-2 border-violet-600 rounded-md placeholder-violet-600 text-violet-600 outline-none font-bold"
                    placeholder="Create Password"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Register
                  </button>
                </div>
              </form>
              <div className="text-center">
                <p className="mt-2 text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link to="/hospital_login">
                    <button className="font-medium text-indigo-600 hover:text-indigo-500">
                      Log in
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%] flex flex-col items-center">
            <img src={illustrate12} className="w-[500px]" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HospitalRegister;
