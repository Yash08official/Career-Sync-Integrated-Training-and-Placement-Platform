import React, { useState, useEffect } from "react";
import axios from "axios";
import Papa from "papaparse";
import { api } from "../../client/api";
import { useSearchParams } from 'react-router-dom';

function TableData() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page')) || 1;
  const limit = parseInt(searchParams.get('limit')) || 10;

  async function fetcher(page, limit) {
    const response = await api.get(`/api/v1/user?user?limit=${limit}&page=${page}`);
    if (response.data) {
      setData(response.data);
    }
  }

  useEffect(() => {
    fetcher(page, limit);
  }, [page, limit]);


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle pagination change
  const handlePaginationChange = (newPage) => {
    setSearchParams({ page: newPage.toString(), limit: limit.toString() });
  };

  // Calculate index of the last item on the current page
  const indexOfLastItem = page * limit;
  // Calculate index of the first item on the current page
  const indexOfFirstItem = indexOfLastItem - limit;

  // Get current items to display on the page
  const currentItems = data.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Generate table headers dynamically from the first data object
  const tableHeaders = data.length > 0 ? Object.keys(data[0]) : [];

  // Function to convert json to csv
  function downloadCSV(data, filename) {
    const csvContent = Papa.unparse(data); // Assuming you're using PapaParse library for CSV parsing

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    if (navigator.msSaveBlob) { // For IE and Edge browsers
      navigator.msSaveBlob(blob, filename);
    } else {
      const link = document.createElement("a");

      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          Student Data
        </h2>
        <div className="flex gap-4">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            onClick={() => downloadCSV(data, "studentdata")}
            type="submit"
            className="w-full md:w-1/2 text-white bg-[#4F46E5] focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2 text-center dark:bg-[#4F46E5]  dark:focus:ring-blue-800 mx-auto"
          >
            Export to CSV
          </button>
        </div>
      </div>

      <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 bg-red-500 dark:bg-[#1E293B]">
          <thead className="text-sm bg-indigo-500 dark:text-white w-full whitespace-nowrap text-white">
            <tr className="text-center w-full">
              {tableHeaders.map((header, index) => (
                <th key={index} scope="col" className="py-6 px-3">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((rowData, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800   whitespace-nowrap text-center dark:text-slate-300 text-black font-medium"
              >
                {tableHeaders.map((header, index) => (
                  <td key={index} className="px-6 py-4">
                    {rowData[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePaginationChange(page - 1)}
          disabled={page === 1}
          className="mx-1 px-4 py-2 text-white bg-[#4F46E5] focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md dark:bg-[#4F46E5]  dark:focus:ring-blue-800"
        >
          Previous
        </button>
        <button
          onClick={() => handlePaginationChange(page + 1)}
          className="mx-1 px-4 py-2 text-white bg-[#4F46E5] focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md dark:bg-[#4F46E5]  dark:focus:ring-blue-800"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default TableData;
