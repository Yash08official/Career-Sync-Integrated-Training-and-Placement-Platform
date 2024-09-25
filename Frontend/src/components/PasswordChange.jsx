import React, { useState } from "react";
import { useAuth } from "../context/auth";
import { Navigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import { api } from "../client/api";

function ProjectSubmissionForm() {
      const { user } = useAuth();
      const [formData, setFormData] = useState({
            Password: "",
            Repeat_Password: ""
      });
      const [isLoading, setIsLoading] = useState(false);

      if (!user) {
            return <Navigate to="/" replace />
      }

      const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                  ...formData,
                  [name]: value,
            });
      };



      const handleSubmit = async (e) => {
            e.preventDefault();

            if (!formData.Password || !formData.Repeat_Password) {
                  return toast.error("Password and Repeat_Password is Required!", {
                        position: "top-center",
                  });
            }

            if (formData.Password !== formData.Repeat_Password) {
                  return toast.error("Password and Repeat_Password must be same", {
                        position: "top-center",
                  });
            }

            try {
                  const response = await api.patch("/api/v1/user/updatePassword", {
                        Email_ID: user.Email_ID,
                        Password: formData.Password,
                        Repeat_Password: formData.Repeat_Password,
                  });

                  if (response.data) {
                        toast.success("Password updated successfully!", {
                              position: "top-center",
                        });
                  }
            } catch (error) {
                  console.log(error);
                  toast.error(`something went wrong! ${error}`, {
                        position: "top-center",
                  });
            } finally {
                  setIsLoading(false);
            }
      };

      return (
            <>
                  <ToastContainer />
                  <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-1 mx-auto my-7">
                        <div>
                              <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                                    Account Security
                              </h2>
                        </div>
                        {user && (
                              <form onSubmit={handleSubmit}>
                                    <div className="bg-white rounded-xl shadow text-gray-900 dark:text-white dark:bg-slate-800">

                                          <div className="pt-0 p-4 sm:pt-0 sm:p-7">
                                                <div className="space-y-4 sm:space-y-6">

                                                      <div>
                                                            <h1 className="block mb-2 text-md font-medium text-gray-900 dark:text-blue-500" />
                                                            <h1 className="text-2xl font-semibold my-6 text-[#4F46E5] mt-10">
                                                                  Manage Password
                                                            </h1>

                                                            <div className="line -mt-2 border border-gray-900/10 dark:border-white"></div>

                                                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                  <div className="block mb-2 text-md font-medium text-gray-900 dark:text-white sm:col-span-3">
                                                                        <label
                                                                              htmlFor="first-name"
                                                                              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                                                        >
                                                                              Current Password
                                                                        </label>
                                                                        <div className="mt-2">
                                                                              <input
                                                                                    value={user?.Password}
                                                                                    disabled
                                                                                    type="text"
                                                                                    name="first-name"
                                                                                    id="first-name"
                                                                                    autoComplete="given-name"
                                                                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                                                                                    placeholder="Enter Your Teacher ID"
                                                                              />
                                                                        </div>
                                                                  </div>
                                                            </div>

                                                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                  <div className="block mb-2 text-md font-medium text-gray-900 dark:text-white sm:col-span-3">
                                                                        <label
                                                                              htmlFor="first-name"
                                                                              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                                                        >
                                                                              Change Password
                                                                        </label>
                                                                        <div className="mt-2">
                                                                              <input
                                                                                    value={formData.Password}
                                                                                    onChange={handleInputChange}
                                                                                    type="text"
                                                                                    disabled={isLoading}
                                                                                    name="Password"
                                                                                    id="Password"
                                                                                    autoComplete="given-name"
                                                                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                                                                                    placeholder="Enter Your Teacher ID"
                                                                              />
                                                                        </div>
                                                                  </div>
                                                                  <div className="block mb-2 text-md font-medium text-gray-900 dark:text-white sm:col-span-3">
                                                                        <label
                                                                              htmlFor="first-name"
                                                                              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                                                        >
                                                                              Confirm Password
                                                                        </label>
                                                                        <div className="mt-2">
                                                                              <input
                                                                                    value={formData.Repeat_Password}
                                                                                    onChange={handleInputChange}
                                                                                    type="text"
                                                                                    disabled={isLoading}
                                                                                    name="Repeat_Password"
                                                                                    id="Repeat_Password"
                                                                                    autoComplete="given-name"
                                                                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                                                                                    placeholder="Enter Your Teacher ID"
                                                                              />
                                                                        </div>
                                                                  </div>
                                                            </div>

                                                      </div>


                                                      <div className="mt-5 flex justify-center gap-x-2">
                                                            <button
                                                                  type="submit"
                                                                  disabled={isLoading}
                                                                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                            >
                                                                  Update Profile
                                                            </button>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </form>
                        )}
                  </div>
            </>

      );
}

export default ProjectSubmissionForm;
