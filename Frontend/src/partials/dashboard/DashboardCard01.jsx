import React, { useState, useEffect } from "react";
import Icon from "../../images/icon-01.svg";
import Calender from "../../images/calender.878x1024.png";

const DateTimeComponent = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const dateOptions = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        weekday: "long",
      };
      const formattedDate = now.toLocaleDateString(undefined, dateOptions);
      setCurrentDate(formattedDate);

      const timeOptions = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      };
      const formattedTime = now.toLocaleTimeString(undefined, timeOptions);
      setCurrentTime(formattedTime);
    };

    // Update the current date and time initially
    updateDateTime();

    // Set up an interval to update the current date and time every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  // Move the DashboardCard01 function outside of the useEffect
  const DashboardCard01 = () => {
    return (
      <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 ">
        <div className="px-5 py-4 ">
          <header className="flex justify-start items-center mb-2">
            {/* Icon */}
            <img src={Icon} width="32" height="32" alt="Icon 02" />
            <h2 className="text-md font-semibold text-slate-800 dark:text-slate-100 ml-2">
              Date and Time
            </h2>
          </header>
          <div className="flex items-center ">
            <div className="relative w-full pl-9">
              <h2 className="text-md font-bold text-slate-500 dark:text-slate-100 ">
                {currentDate}
              </h2>
              <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2 ">
                {currentTime}
              </h2>
              {/* <img src={Icon} width="96" height="96" alt="Icon " className='absolute top-0 -right-7 -rotate-45 ' /> */}
            </div>
          </div>
        </div>
        {/* Chart built with Chart.js 3 */}
        {/* <div className="grow max-sm:max-h-[128px] max-h-[128px]"> */}
        {/* Change the height attribute to adjust the chart height */}
        {/* <LineChart data={chartData} width={389} height={128} /> */}
        {/* </div> */}
      </div>
    );
  };

  // Render the DashboardCard01 component
  return <DashboardCard01 />;
};

export default DateTimeComponent;
