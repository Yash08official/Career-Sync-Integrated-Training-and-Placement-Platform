import React, { useState } from "react";
import { useAuth } from "../../context/auth";
import { Navigate } from "react-router-dom";
import { api } from "../../client/api";

function RegistrationForm() {
  const { login, user } = useAuth();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await api.post(
        `/api/v1/user/login`,
        {
          Email_ID: email,
          Password: password,
        },
      );

      const data = response.data;

      if (data) {
        login(data);
      }

    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="max-w-md mx-auto px-5 py-8 h-screen flex flex-col justify-center "
      onSubmit={handleSubmit}
    >
      <div className="mb-5 ">
        <h1 className="text-3xl font-bold mb-4 text-black dark:text-indigo-600 text-center ">
          Welcome Back 👋
        </h1>
        <label
          htmlFor="email"
          className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          disabled={isLoading}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base "
          placeholder="Enter Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="role"
          className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
        >
          Your Role
        </label>
        <select
          id="role"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Choose Your Role</option>
          <option value="Student">Student</option>
          <option value="Teacher Coordinator">Teacher Coordinator</option>
          <option value="Traning and placement Officer(TPO)">
            Traning and placement Officer(TPO)
          </option>
        </select>
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          disabled={isLoading}
          type="password"
          id="password"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base"
          required
          placeholder="Enter Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            disabled={isLoading}
            id="terms"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
        </div>
        <label
          htmlFor="terms"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          I agree with the{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            terms and conditions
          </a>
        </label>
      </div>
      <button
        disabled={isLoading}
        type="submit"
        className=" w-full text-white bg-[#4F46E5] focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-3 text-center dark:bg-[#4F46E5]  dark:focus:ring-blue-800"
      >
        Register new account
      </button>
    </form>
  );
}

export default RegistrationForm;
