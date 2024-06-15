import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className='Login bg-[#F2F2F2] flex items-center justify-center h-screen w-full px-20 font-["Roboto"]'>
      {/* <div className='w-1/2'></div> */}
      <div className="Form flex-row item-center justify-center  rounded-md px-8">
        <div className="py-4 text-center">
          <h1 className=" font-bold text-4xl">Welcome!</h1>
          <h1 className=" text-2xl font-semibold">
            Hope you are feeling better today.
          </h1>
        </div>
        <div className="py-1">
          <div className="py-3">
            <h1 className="text-xl">Username</h1>
            <input
              type="email"
              value={email}
              name="email"
              className="rounded-md border-black border-[1px] text-2xl w-full font-light"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <h1 className="text-xl">Password</h1>
            <input
              type="password"
              value={password}
              name="pass"
              className="rounded-md border-black border-[1px] text-2xl w-full font-light"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="py-3">
            <h1 className="text-xl">Confirm Password</h1>
            <input
              type="password"
              value={confirmPassword}
              name="pass"
              className="rounded-md border-black border-[1px] text-2xl w-full font-light"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="button py-6 w-full flex justify-between items-center">
          <Link to={"/check-age"} className="px-6 py-2 bg-[#F20707] text-xl font-semibold rounded-md uppercase">
            SignIn
          </Link>
          <Link to={"/login"} className="text-lg underline">
            Already have an account.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
