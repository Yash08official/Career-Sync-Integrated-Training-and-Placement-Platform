import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { api } from "../../client/api";
import { useAuthorize } from "../../hooks/useAuthorize";

function JobGrid() {
  const { user } = useAuth();
  const { isAuthorize } = useAuthorize();

  const [data, setData] = React.useState(null);

  async function getData() {
    const response = await api.get("/api/v1/post");
    if (response.data) {
      setData(response.data);
    }
  }

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ul className="mt-6 divide-y space-y-6">
          <div className="flex justify-between">
            <div>
              <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                Active Jobs
              </h2>
            </div>
            {user && isAuthorize && (
              <div>
                <Link to="/Dashboard/job-post">
                  <button
                    type="submit"
                    className="w-full  text-white bg-[#4F46E5] focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 text-center dark:bg-[#4F46E5]  dark:focus:ring-blue-800 mx-auto"
                  >
                    Create new Job
                  </button>
                </Link>
              </div>
            )}
          </div>

          {data &&
            data.map((item, idx) => (
              <li
                key={idx}
                className="px-5 py-5 duration-150 border-none  rounded-xl dark:bg-[#1E293B] bg-white  "
              >
                <a href={item.path} className="space-y-3">
                  <div className="flex items-center gap-x-3 justify-between">
                    <div className="flex items-center justify-center gap-4 ">
                      <div className="bg-white w-14 h-14 border rounded-full flex items-center justify-center ">
                        {/* {item.company_Name} */}
                      </div>
                      <div>
                        <span className="block text-xl text-indigo-600 font-semibold">
                          {item.company_Name}
                        </span>
                        <h3 className="text-md text-gray-900 dark:text-white font-medium mt-1">
                          {item.job_Position}
                        </h3>
                      </div>
                    </div>

                    <div className="mr-4 text-md text-indigo-600">
                      <Link
                        to={`/dashboard/activejobs/${item._id}`}
                      >
                        See Details
                      </Link>
                    </div>
                  </div>

                  <div className="text-base dark:text-white flex items-center gap-6 flex-wrap ml-2">
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6 6V5C6 3.34315 7.34315 2 9 2H11C12.6569 2 14 3.34315 14 5V6H16C17.1046 6 18 6.89543 18 8V11.5708C15.5096 12.4947 12.8149 12.9999 10 12.9999C7.18514 12.9999 4.49037 12.4947 2 11.5707V8C2 6.89543 2.89543 6 4 6H6ZM8 5C8 4.44772 8.44772 4 9 4H11C11.5523 4 12 4.44772 12 5V6H8V5ZM9 10C9 9.44772 9.44772 9 10 9H10.01C10.5623 9 11.01 9.44772 11.01 10C11.01 10.5523 10.5623 11 10.01 11H10C9.44772 11 9 10.5523 9 10Z"
                          fill="#9CA3AF"
                        />
                        <path
                          d="M2 13.6923V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V13.6923C15.4872 14.5404 12.7964 14.9999 10 14.9999C7.20363 14.9999 4.51279 14.5404 2 13.6923Z"
                          fill="#9CA3AF"
                        />
                      </svg>
                      {item.job_Type}
                    </span>
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.05025 4.05025C7.78392 1.31658 12.2161 1.31658 14.9497 4.05025C17.6834 6.78392 17.6834 11.2161 14.9497 13.9497L10 18.8995L5.05025 13.9497C2.31658 11.2161 2.31658 6.78392 5.05025 4.05025ZM10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z"
                          fill="#9CA3AF"
                        />
                      </svg>

                      {item.location}
                    </span>

                    <span className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5  text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>

                      {item.deadline}
                    </span>

                    <span className="flex items-center text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item.salary}
                    </span>
                  </div>
                  <p className="text-gray-600  dark:text-white text-md ml-2">
                    {item.job_Description}
                  </p>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default JobGrid;
