import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../context/auth";
import { Navigate } from "react-router-dom";
import { api } from "../../client/api";
import { useAuthorize } from "../../hooks/useAuthorize";

function JobPost() {
  const { user } = useAuth();
  const { isAuthorize } = useAuthorize();

  if (!isAuthorize) {
    return <Navigate to="/dashboard" replace />;
  }

  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    aboutCompany: "",
    websiteLink: "",
    jobTitle: "",
    jobDescription: "",
    jobPosition: "",
    jobType: "",
    salary: "",
    vacancy: "",
    jobLocation: "",
    qualification: "",
    skills: "",
    experience: "",
    selectionProcess: "",
    termsAndConditions: "",
    registrationLink: "",
    registrationDeadline: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await api.post("/api/v1/post", {
        company_Name: formData.companyName,
        company_description: formData.aboutCompany,
        website_Link: formData.websiteLink,
        job_Description: formData.jobDescription,
        job_Position: formData.jobPosition,
        job_Type: formData.jobType,
        salary: formData.salary,
        vacancy: formData.vacancy,
        location: formData.jobLocation,
        qualification: formData.qualification,
        skills: formData.skills,
        experience: formData.experience,
        selection_Process: formData.selectionProcess,
        terms_and_conditions: formData.termsAndConditions,
        registration_Link: formData.registrationLink,
        deadline: formData.registrationDeadline,
        teacher: user._id,
        role: user.role,
      });

      if (response.data) {
        toast.success("Job created successfully!", {
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
    <section className="bg-white dark:bg-gray-900">
      <ToastContainer />
      <div className="max-w-8xl px-4 py-8 md:mx-6 mx-2 lg:py-8">
        <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
          Create a New Job
        </h2>

        <form onSubmit={handleSubmit}>
          <h2 className="  text-xl font-semibold mb-4 text-[#4F46E5]">
            Company Details
          </h2>
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                placeholder="Enter Company Name"
                required
              />
              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white "
              >
                About Company
              </label>

              <textarea
                id="aboutCompany"
                name="aboutCompany"
                value={formData.aboutCompany}
                onChange={handleInputChange}
                rows="4"
                className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-md py-3 px-5 dark:shadow-sm-light text-base mb-4"
                placeholder="Enter Brief About Company"
              ></textarea>

              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white "
              >
                Company Logo
              </label>
              <input
                type="file"
                name="file-input"
                id="file-input"
                className="block w-full border border-gray-200 shadow-sm rounded-md text-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-5 dark:file:bg-[#1E293B] dark:file:text-gray-400 mb-4 "
              />

              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Website Link
              </label>
              <input
                type="text"
                id="websiteLink"
                name="websiteLink"
                value={formData.websiteLink}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                placeholder="Enter Website Link"
                required
              />

              <h2 className="  text-xl font-semibold mb-4 text-[#4F46E5]">
                Job Details
              </h2>

              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                placeholder="Enter Job Title"
                required
              />
              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white "
              >
                Job Description
              </label>

              <textarea
                type="text"
                id="jobDescription"
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                required
                rows={4}
                placeholder="Enter Job Description"
              ></textarea>

              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Job Position
              </label>
              <input
                type="text"
                id="jobPosition"
                name="jobPosition"
                value={formData.jobPosition}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                placeholder="Enter Job Position"
                required
              />

              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Job Type
              </label>

              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
              >
                <option value="">Choose Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Timer">Part Timer</option>
                <option value="Work From Home">Work From Home</option>
                <option value="Remote Job">Remote Job</option>
              </select>

              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Salary
              </label>
              <input
                type="text"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                required
                placeholder="Enter Salary Range or Fixed Value"
              />

              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Vacancy
              </label>
              <input
                type="text"
                id="Vacancy"
                name="vacancy"
                value={formData.vacancy}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                required
                placeholder="Enter No of Vacanci"
              />

              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Job Location
              </label>
              <input
                type="text"
                id="jobLocation"
                name="jobLocation"
                value={formData.jobLocation}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                required
                placeholder="Enter Job Location"
              />
              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Qualification
              </label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                required
                placeholder="Enter Qualification"
              />
              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Skills
              </label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                placeholder="HTML , CSS ,JS ,JAVA ,C etc"
                required
              />
              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Experience
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                placeholder="Enter Experince  eg. Fresher"
                required
              />

              <h2 className="  text-xl font-semibold mb-4 text-[#4F46E5]">
                Selection Process
              </h2>

              <textarea
                type="text"
                id="selectionProcess"
                name="selectionProcess"
                value={formData.selectionProcess}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                placeholder="Enter Brief About Selection Process"
                rows={4}
              ></textarea>

              <h2 className="  text-xl font-semibold mb-4 text-[#4F46E5]">
                Terms and conditions of employment:
              </h2>

              <textarea
                type="text"
                id="termsAndConditions"
                name="termsAndConditions"
                value={formData.termsAndConditions}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                placeholder="Enter Terms And Conditions"
                rows={4}
              ></textarea>

              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Registration Link:
              </label>
              <input
                type="text"
                id="registrationLink"
                name="registrationLink"
                value={formData.registrationLink}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                placeholder="Enter Registration Link"
                required
              />

              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Deadline for Registration
              </label>
              <input
                type="text"
                id="registrationDeadline"
                name="registrationDeadline"
                value={formData.registrationDeadline}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base mb-4"
                placeholder="Enter Deadline for Registration"
                required
              />
            </div>
            {/* Additional form fields */}
          </div>
          <div className="flex items-center space-x-4">
            <button
              type="submit"
              className="w-full md:w-1/2 text-white bg-[#4F46E5] focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-3 text-center dark:bg-[#4F46E5]  dark:focus:ring-blue-800 mx-auto"
            >
              Create new Job
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default JobPost;
