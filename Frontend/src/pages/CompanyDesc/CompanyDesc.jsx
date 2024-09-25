import * as React from "react";
import { useAuth } from "../../context/auth";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { api } from "../../client/api";
import { useAuthorize } from "../../hooks/useAuthorize";

function CompanyDesc() {
  const { user } = useAuth();
  const { isAuthorize } = useAuthorize();

  const [post, setPost] = React.useState(null);
  const { id } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isApplied, setIsApplied] = React.useState(false);

  async function featcher(id) {
    const response = await api.get(`/api/v1/post/${id}`);
    if (response.data) {
      setPost(response.data)
    }
  }

  async function getAppliedStatus(postId) {
    const response = await api.get(`/api/v1/user/applied-status?postId=${postId}`);
    if (response.data) {
      setIsApplied(response.data?.hasApplied);
    }
  }


  async function handleApply(post) {
    try {
      setIsLoading(true)
      const response = await api.post("/api/v1/application", {
        post: post._id
      });
      console.log(response);
      toast.success("successfully applied!", {
        position: "top-center",
      });
    } catch (error) {
      setIsLoading(false);
      toast.error("somthing went wrong please try again!", {
        position: "top-center",
      });
    }
    finally {
      setIsLoading(false)
    }
  }

  async function handleRemove(id) {
    try {
      setIsLoading(true)
      const response = await api.delete(`/api/v1/post/${id}`);
      toast.success("successfully deleted!", {
        position: "top-center",
      });
    } catch (error) {
      setIsLoading(false);
      toast.error("somthing went wrong please try again!", {
        position: "top-center",
      });
    }
    finally {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    featcher(id);
    getAppliedStatus(id)
  }, [])


  return (
    <>
      <ToastContainer />
      {post && (
        <div class="md:grid md:grid-cols-3 h-fit gap-4 grid-col-1 mt-2 ">
          <div class="col-span-1 py-6 md:px-8 px-4 bg-white dark:bg-[#1E293B] rounded-lg w-full h-fit mb-6">
            <h2 className="block text-2xl font-semibold text-gray-900 dark:text-white">
              Overview
            </h2>
            <div class="grid grid-cols-1 content-center py-4 mb-2 ">
              <div className="text-medium">
                <div className="flex  justify-between border-dashed  border-gray-900/10 dark:border-gray-600 border-b-2 pb-2 mb-3">
                  <div className="">Job Title :</div>
                  <div className="">{post.job_Position}</div>
                </div>
                <div className="flex  justify-between border-dashed border-gray-900/10 dark:border-gray-600 border-b-2 pb-2 mb-3">
                  <div className="">Date :</div>
                  <div className=""> {post.createdAt}</div>
                </div>
                <div className="flex  justify-between border-dashed border-gray-900/10  dark:border-gray-600 border-b-2 pb-2 mb-3">
                  <div className="">Experience :</div>
                  <div className="w-1/2"> {post.experience} </div>
                </div>
                <div className="flex  justify-between border-dashed border-gray-900/10 dark:border-gray-600 border-b-2 pb-2 mb-3">
                  <div className="">Salary :</div>
                  <div className="">{post.salary}</div>
                </div>

                <div className="flex  justify-between border-dashed border-gray-900/10 dark:border-gray-600 border-b-2 pb-2 mb-3">
                  <div className="">Vacancy :</div>
                  <div className="">{post.vacancy}</div>
                </div>
                <div className="flex  justify-between border-dashed border-gray-900/10 dark:border-gray-600 border-b-2 pb-2 mb-3">
                  <div className="">Job Type :</div>
                  <div className=""> {post.job_Type}</div>
                </div>
                <div className="flex  justify-between border-dashed border-gray-900/10 dark:border-gray-600 border-b-2 pb-2 ">
                  <div className="">Last Apply Date</div>
                  <div className="">{post.deadline}</div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {
                isAuthorize && (
                  <button
                    onClick={async () => await handleRemove(post?._id)}
                    type="submit"
                    className="w-full md:w-1/2 text-white bg-red-600 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2 text-center dark:bg-red-600  dark:focus:ring-red-800 mx-auto"
                  >
                    Delete Job Post
                  </button>
                )}
              {
                !isAuthorize && isApplied ? (
                  <button
                    onClick={async () => await handleApply(post)}
                    type="submit"
                    className="w-full md:w-1/2 text-white bg-green-500 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2 text-center dark:bg-green-500  dark:focus:ring-green-800 mx-auto"
                  >
                    Already Applied
                  </button>
                ) : (
                  <button
                    onClick={async () => await handleApply(post)}
                    type="submit"
                    className="w-full md:w-1/2 text-white bg-[#4F46E5] focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2 text-center dark:bg-[#4F46E5]  dark:focus:ring-blue-800 mx-auto"
                  >
                    Apply to job
                  </button>
                )
              }
            </div>
          </div>

          <div class="col-span-2 py-6 md:px-7 px-4 h-fit  bg-white dark:bg-[#1E293B] rounded-lg ">
            <div className="w-full  flex flex-row items-center  ">
              <div className="bg-white w-20 h-20 border rounded-full flex items-center justify-center mr-4  ">
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_715_1824)">
                    <path
                      d="M34.6588 17.9031C34.6588 16.7135 34.5623 15.5175 34.3565 14.3472H17.85V21.0861H27.3025C26.9103 23.2595 25.6499 25.1822 23.8044 26.4039V30.7765H29.4438C32.7554 27.7286 34.6588 23.2274 34.6588 17.9031Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M17.85 35.0011C22.5698 35.0011 26.5502 33.4514 29.4502 30.7764L23.8109 26.4038C22.2419 27.4712 20.2163 28.0757 17.8564 28.0757C13.2909 28.0757 9.41989 24.9956 8.03095 20.8545H2.21155V25.3621C5.18234 31.2715 11.2332 35.0011 17.85 35.0011Z"
                      fill="#34A853"
                    />
                    <path
                      d="M8.02451 20.8547C7.29146 18.6813 7.29146 16.3278 8.02451 14.1544V9.64673H2.21154C-0.270546 14.5916 -0.270546 20.4174 2.21154 25.3623L8.02451 20.8547Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M17.85 6.92659C20.3449 6.88801 22.7563 7.82683 24.5632 9.55014L29.5595 4.55382C26.3958 1.58303 22.1968 -0.0502629 17.85 0.0011793C11.2332 0.0011793 5.18234 3.73074 2.21155 9.6466L8.02452 14.1542C9.40703 10.0067 13.2845 6.92659 17.85 6.92659Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_715_1824">
                      <rect width="35" height="35" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="">
                <h2 className="block text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {post.job_Position}
                </h2>

                <div className="text-base dark:text-white flex items-center gap-2 md:gap-6 flex-wrap ml-0 md:mb-3">
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

                    <p>{post.job_Type}</p>
                  </span>
                  <span className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.05025 4.05025C7.78392 1.31658 12.2161 1.31658 14.9497 4.05025C17.6834 6.78392 17.6834 11.2161 14.9497 13.9497L10 18.8995L5.05025 13.9497C2.31658 11.2161 2.31658 6.78392 5.05025 4.05025ZM10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z"
                        fill="#9CA3AF"
                      />
                    </svg>

                    <p>Remotely</p>
                  </span>

                  <span className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                        fill="#9CA3AF"
                      />
                    </svg>

                    <p>{post.createdAt}</p>
                  </span>

                  <span className="flex items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                        clipRule="evenodd"
                        fill="#9CA3AF"
                      />
                    </svg>

                    <p>{post.salary}</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="line mt-4 border border-gray-900/10 dark:border-[#4F46E5] opacity-50"></div>

            {/* More Info Section */}

            <div className="">
              <div className="">
                <p className="block text-lg font-medium text-gray-900 dark:text-white  mt-3 ">
                  Company Name : {post.job_Position}
                </p>
                <p className="block text-lg font-medium text-gray-900 dark:text-white mt-2 mb-2">
                  Description
                </p>
                <p className=" text-justify mb-4">
                  {post.job_Description}
                </p>

                <div className="">
                  <p className=" block text-lg font-medium text-gray-900 dark:text-white">
                    Website Link :{" "}
                  </p>{" "}
                  <a href="" />
                </div>

                <div className="line mt-4 border border-gray-900/10 dark:border-[#4F46E5] opacity-50"></div>

                <p className="block text-lg font-medium text-gray-900 dark:text-white  mt-3">
                  Job Title : {post.job_Position}
                </p>
                <p className="block text-lg font-medium text-gray-900 dark:text-white mt-2 mb-2">
                  Job Description
                </p>
                <p className=" text-justify mb-2">
                  {
                    post.job_Description
                  }
                </p>
              </div>

              <div class="grid grid-cols-1 content-center py-4 mb-2 ">
                <div className="text-medium">
                  <div className="flex  justify-between border-dashed  border-gray-900/10 dark:border-gray-600 border-b-2 pb-2 mb-3">
                    <div className="">Job Title :</div>
                    <div className="">{post.job_Position}</div>
                  </div>
                  <div className="flex  justify-between border-dashed border-gray-900/10 dark:border-gray-600 border-b-2 pb-2 mb-3">
                    <div className="">Date :</div>
                    <div className=""> {post.createdAt}</div>
                  </div>
                  <div className="flex  justify-between border-dashed border-gray-900/10  dark:border-gray-600 border-b-2 pb-2 mb-3">
                    <div className="">Experience :</div>
                    <div className="">{post.experience}</div>
                  </div>
                  <div className="flex  justify-between border-dashed border-gray-900/10 dark:border-gray-600 border-b-2 pb-2 mb-3">
                    <div className="">Salary :</div>
                    <div className="">{post.experience}</div>
                  </div>

                  <div className="flex  justify-between border-dashed border-gray-900/10 dark:border-gray-600 border-b-2 pb-2 mb-3">
                    <div className="">Vacancy :</div>
                    <div className=""> {post.vacancy}</div>
                  </div>
                  <div className="flex  justify-between border-dashed border-gray-900/10 dark:border-gray-600 border-b-2 pb-2 mb-3">
                    <div className="">Job Location : </div>
                    <div className=""> {post.location}</div>
                  </div>
                  <div className="flex  justify-between border-dashed border-gray-900/10 dark:border-gray-600 border-b-2 pb-2 mb-3">
                    <div className="">Qualification : </div>
                    <div className="">{post.qualification}</div>
                  </div>
                  <div className="flex  justify-between border-dashed border-gray-900/10 dark:border-gray-600 border-b-2 pb-2 mb-3">
                    <div className="">Skills Required : </div>
                    <div className="">{post.skills}</div>
                  </div>
                  <div className="flex  justify-between border-dashed border-gray-900/10 dark:border-gray-600 border-b-2 pb-2 mb-3">
                    <div className="">Job Type :</div>
                    <div className="">{post.job_Type}</div>
                  </div>
                  <div className="flex  justify-between  pb-2 ">
                    <div className="">Last Apply Date</div>
                    <div className=""> {post.deadline}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="line mt-4 border border-gray-900/10 dark:border-[#4F46E5] opacity-50"></div>
            <p className="block text-lg font-medium text-gray-900 dark:text-white mt-3 mb-2">
              Selection Process
            </p>
            <p className=" text-justify mb-2">
              {post.selection_Process}
            </p>
            <div className="line mt-4 border border-gray-900/10 dark:border-[#4F46E5] opacity-50"></div>
            <p className="block text-lg font-medium text-gray-900 dark:text-white mt-2 mb-2">
              Terms and conditions of employment:
            </p>
            <p className=" text-justify mb-2">
              {post.terms_and_conditions}
            </p>
            <div className="line mt-4 border border-gray-900/10 dark:border-[#4F46E5] opacity-50"></div>
            <div className="">
              <p className=" block text-lg font-medium text-gray-900 dark:text-white mt-3">
                Website Link : <span className="underline">{post.website_Link}</span>
              </p>{" "}
              <a href="" />
            </div>

            <p className="block text-lg font-medium text-gray-900 dark:text-white mt-3">
              Deadline for Registration : {post.deadline}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default CompanyDesc;
