import React from "react";
import { useAuth } from "../context/auth";
import { Navigate } from "react-router-dom"

function ProjectSubmissionForm() {
      const { user } = useAuth();

      if (user?.Role !== "teacher") {
            return <Navigate to="/dashboard" replace />
      }

      return (
            <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-1 mx-auto my-7">
                  <div>
                        <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                              Teacher Profile
                        </h2>
                  </div>
                  {user && (
                        <form>
                              <div className="bg-white rounded-xl shadow text-gray-900 dark:text-white dark:bg-slate-800">
                                    <div className="relative h-40 rounded-t-xl bg-cover bg-center">
                                          <div className="absolute top-0 right-0 p-4"></div>
                                    </div>

                                    <div className="pt-0 p-4 sm:pt-0 sm:p-7">
                                          <div className="space-y-4 sm:space-y-6">
                                                <div>
                                                      <label htmlFor="projectPhoto" className="sr-only">
                                                            Profile photo
                                                      </label>

                                                      <div className="grid1 sm:flex sm:items-center sm:gap-x-5">

                                                            <div className="mt-4 sm:mt-auto sm:mb-1.5 flex justify-center sm:justify-start gap-2">
                                                                  <button
                                                                        disabled
                                                                        type="button"
                                                                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                                  >
                                                                        <svg
                                                                              xmlns="http://www.w3.org/2000/svg"
                                                                              fill="none"
                                                                              viewBox="0 0 24 24"
                                                                              stroke-width="1.5"
                                                                              stroke="currentColor"
                                                                              class="w-5 h-4.5"
                                                                        >
                                                                              <path
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                                                                              />
                                                                        </svg>
                                                                        Upload image
                                                                  </button>
                                                                  <button
                                                                        disabled
                                                                        type="button"
                                                                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-red-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                                  >
                                                                        Delete
                                                                  </button>
                                                            </div>
                                                      </div>
                                                </div>

                                                <div className=" pb-12">
                                                      <h1 className="block mb-2 text-md font-medium text-gray-900 dark:text-blue-500" />
                                                      <h1 className="text-2xl font-semibold mb-4 text-[#4F46E5] mt-10">
                                                            Personal Information
                                                      </h1>

                                                      <div className="line -mt-2 border border-gray-900/10 dark:border-white"></div>

                                                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                            <div className="block mb-2 text-md font-medium text-gray-900 dark:text-white sm:col-span-3">
                                                                  <label
                                                                        htmlFor="first-name"
                                                                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                                                  >
                                                                        Teacher ID
                                                                  </label>
                                                                  <div className="mt-2">
                                                                        <input
                                                                              value={user?.College_ID}
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
                                                            <div className="sm:col-span-2 sm:col-start-1">
                                                                  <label
                                                                        htmlFor="city"
                                                                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                                                  >
                                                                        First Name
                                                                  </label>
                                                                  <div className="mt-2">
                                                                        <input
                                                                              disabled
                                                                              value={user.Full_Name.split(/\s+/)[0]}
                                                                              type="text"
                                                                              name="city"
                                                                              id="city"
                                                                              autoComplete="address-level2"
                                                                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base"
                                                                              placeholder="First Name"
                                                                        />
                                                                  </div>
                                                            </div>

                                                            <div className="sm:col-span-2">
                                                                  <label
                                                                        htmlFor="region"
                                                                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                                                  >
                                                                        Middle Name
                                                                  </label>
                                                                  <div className="mt-2">
                                                                        <input
                                                                              disabled
                                                                              value={user.Full_Name.split(/\s+/)[1]}
                                                                              type="text"
                                                                              name="region"
                                                                              id="region"
                                                                              autoComplete="address-level1"
                                                                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base"
                                                                              placeholder="Middle Name"
                                                                        />
                                                                  </div>
                                                            </div>

                                                            <div className="sm:col-span-2">
                                                                  <label
                                                                        htmlFor="Last Name"
                                                                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                                                  >
                                                                        Last Name
                                                                  </label>
                                                                  <div className="mt-2">
                                                                        <input
                                                                              disabled
                                                                              value={user.Full_Name.split(/\s+/)[2]}
                                                                              type="text"
                                                                              name="Last Name"
                                                                              id="Last Name"
                                                                              autoComplete="Last Name"
                                                                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base"
                                                                              placeholder="Last Name"
                                                                        />
                                                                  </div>
                                                            </div>

                                                            <div className="sm:col-span-2 sm:col-start-1">
                                                                  <label
                                                                        htmlFor="city"
                                                                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                                                  >
                                                                        Phone Number
                                                                  </label>
                                                                  <div className="mt-2">
                                                                        <input
                                                                              value={user.Mobile_Number}
                                                                              type="text"
                                                                              name="city"
                                                                              id="city"
                                                                              autoComplete="address-level2"
                                                                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base"
                                                                              placeholder="91-XXXXXXXXXX"
                                                                        />
                                                                  </div>
                                                            </div>


                                                            <div className="sm:col-span-2">
                                                                  <label
                                                                        htmlFor="Last Name"
                                                                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                                                  >
                                                                        Aadhar Number
                                                                  </label>
                                                                  <div className="mt-2">
                                                                        <input
                                                                              value={user.Aadhar_Number}
                                                                              type="text"
                                                                              name="Last Name"
                                                                              id="Last Name"
                                                                              autoComplete="Last Name"
                                                                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base"
                                                                              placeholder="XXXX XXXX XXXX"
                                                                        />
                                                                  </div>
                                                            </div>

                                                            <div className="block mb-2 text-md font-medium text-gray-900 dark:text-white sm:col-span-3">
                                                                  <label
                                                                        htmlFor="first-name"
                                                                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                                                  >
                                                                        Gender
                                                                  </label>
                                                                  <div className="mt-2">
                                                                        <input
                                                                              disabled
                                                                              value={user.Gender}
                                                                              type="text"
                                                                              name="first-name"
                                                                              id="first-name"
                                                                              autoComplete="given-name"
                                                                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                                                                              placeholder="Gender"
                                                                        />
                                                                  </div>
                                                            </div>

                                                            <div className="sm:col-span-3">
                                                                  <label
                                                                        htmlFor="last-name"
                                                                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                                                  >
                                                                        Date of Birth
                                                                  </label>
                                                                  <div className="mt-2">
                                                                        <input
                                                                              value={user.Date_of_Birth}
                                                                              type="text"
                                                                              name="last-name"
                                                                              id="last-name"
                                                                              autoComplete="family-name"
                                                                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base"
                                                                              placeholder="DD/MM/YYYY"
                                                                        />
                                                                  </div>
                                                            </div>

                                                            <div className="sm:col-span-4">
                                                                  <label
                                                                        htmlFor="email"
                                                                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                                                  >
                                                                        Email address
                                                                  </label>
                                                                  <div className="mt-2">
                                                                        <input
                                                                              value={user.Email_ID}
                                                                              id="email"
                                                                              name="email"
                                                                              type="email"
                                                                              autoComplete="email"
                                                                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base"
                                                                              placeholder="you@gmail.com"
                                                                        />
                                                                  </div>
                                                            </div>

                                                            <div className="col-span-full">
                                                                  <label
                                                                        htmlFor="street-address"
                                                                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                                                  >
                                                                        Local Address
                                                                  </label>
                                                                  <div className="mt-2">
                                                                        <input
                                                                              value={user.Local_Address}
                                                                              type="text"
                                                                              name="street-address"
                                                                              id="street-address"
                                                                              autoComplete="street-address"
                                                                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base"
                                                                              placeholder="Local Address"
                                                                        />
                                                                  </div>
                                                            </div>
                                                            <div className="col-span-full">
                                                                  <label
                                                                        htmlFor="street-address"
                                                                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                                                  >
                                                                        Permanent Address
                                                                  </label>
                                                                  <div className="mt-2">
                                                                        <input
                                                                              value={user.Permanent_Address}
                                                                              type="text"
                                                                              name="street-address"
                                                                              id="street-address"
                                                                              autoComplete="street-address"
                                                                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base"
                                                                              placeholder="Permanent Address"
                                                                        />
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>


                                                <div className="mt-5 flex justify-center gap-x-2">
                                                      <button
                                                            type="button"
                                                            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                      >
                                                            Update Profile
                                                      </button>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              {/* End Card */}
                        </form>
                  )}
            </div>
      );
}

export default ProjectSubmissionForm;
