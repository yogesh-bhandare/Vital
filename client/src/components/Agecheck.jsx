import React, { useState } from "react";
import { Link } from "react-router-dom";

const Agecheck = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  return (
    <div className='h-screen w-full bg-[#F2F2F2] font-["Roboto"] flex items-center justify-center'>
      <div className="text-center">
        <h1 className="font-semibold text-2xl">
          Do you meet the age requirement?
        </h1>
        <div className="py-10">
          <button
            onClick={() => setSelectedButton(1)}
            className={`h-[40vh] mx-2 w-[25vw] ${
              selectedButton === 1 ? "border-[#F20707]" : "border-black"
            } shadow-lg border-[2px] rounded-md`}
          >
            <div></div>
            <div>
              <h1>I am older than 6 years old.</h1>
            </div>
          </button>
          <button
            onClick={() => setSelectedButton(2)}
            className={`h-[40vh] mx-2 w-[25vw] ${
              selectedButton === 2 ? "border-[#F20707]" : "border-black"
            } shadow-lg border-[2px] rounded-md`}
          >
            <div></div>
            <div>
              <h1>I am filling this out for a child younger than 6 years.</h1>
            </div>
          </button>
        </div>
        <div>
          <Link to={"/questions"} className="font-semibold text-lg text-white bg-black rounded-md px-6 py-2">
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Agecheck;
