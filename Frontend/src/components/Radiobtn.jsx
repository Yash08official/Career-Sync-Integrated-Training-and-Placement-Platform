import React, { useState } from "react";

const YourComponent = () => {
  const [selectedOption, setSelectedOption] = useState(""); // Default selected option

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    { id: "hs-radio-group-1", label: "Female" },
    { id: "hs-radio-group-2", label: "Male" },
    { id: "hs-radio-group-3", label: "Other" },
  ];

  return (
    <div className="flex gap-x-6">
      {options.map((option, index) => (
        <div key={index} className="flex items-center">
          <input
            type="radio"
            id={option.id}
            name="hs-radio-group"
            className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            value={option.label}
            checked={selectedOption === option.label}
            onChange={handleOptionChange}
          />
          <label
            htmlFor={option.id}
            className="text-sm text-gray-500 ms-2 dark:text-gray-400"
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default YourComponent;
