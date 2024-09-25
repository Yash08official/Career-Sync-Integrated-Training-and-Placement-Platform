import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Typed from "typed.js";

function Homepage() {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        " Career Opportunities.",
        " Professional Ventures.",
        "  Industry Trends.",
      ],
      typeSpeed: 60,
      loop: true,
      backSpeed: 60,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden before:absolute before:-top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')]  ">
        <Navbar />
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-20 pb-10 relative top-0 ">
          {/* Announcement Banner */}
          <div className="flex justify-center">
            <a
              className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 py-1 px-2 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              CarrerSync Where Opportunities Meet Talent
            </a>
          </div>
          {/* End Announcement Banner */}

          {/* Title */}
          <div className="mt-5  text-center mx-auto">
            <h1 className=" font-bold text-gray-800 text-5xl md:text-8xl  dark:text-gray-200 w-full">
              Matching Skills with <br />
              <span
                className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent "
                ref={el}
              />
            </h1>
          </div>
          {/* End Title */}

          <div className="mt-5 max-w-4xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-32">
              Elevate your career journey with CarrerSync Job Placement Portal,
              where endless opportunities meet your ambition. Connect, explore,
              and secure your dream job through a platform designed for your
              success.
            </p>
          </div>

          <h2 className="text-medium text-md text-center text-gray-600 dark:text-gray-400">
            All rights Reserverd CarrerSync 2024.
          </h2>
        </div>
      </div>

      {/* End Hero */}
    </>
  );
}

export default Homepage;
