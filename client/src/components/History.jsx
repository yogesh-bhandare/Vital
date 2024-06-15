import React from 'react'
import { Link } from 'react-router-dom'

const History = () => {
  return (
    <div className='h-screen w-full bg-[#F2F2F2] font-["Roboto"] flex items-center justify-center'>
      <div className="text-center">
        <h1 className="font-semibold text-2xl">
          Your History
        </h1>
        <div className="py-10">
          <button
            className='h-[30vh] mx-2 w-[15vw]  border-black"
             shadow-lg border-[2px] border-black rounded-md'
          >
            <div></div>
            <div>
              <h1>Query: My eyes feel dry.</h1>
            </div>
          </button>
          <button
            onClick={() => setSelectedButton(2)}
            className='h-[30vh] mx-2 w-[15vw]  border-black"
             shadow-lg border-[2px] border-black rounded-md'
          >
            <div></div>
            <div>
              <h1>Query: My skin feel too dry.</h1>
            </div>
          </button>
          <button
            onClick={() => setSelectedButton(2)}
            className='h-[30vh] mx-2 w-[15vw]  border-black"
             shadow-lg border-[2px] border-black rounded-md'
          >
            <div></div>
            <div>
              <h1>Query: My eyes feel too dry.</h1>
            </div>
          </button>
        </div>
        <div>
          <Link to={"/questions"} className="uppercase font-semibold text-lg text-white bg-black rounded-md px-6 py-2">
            Retake the Questionnaire!
          </Link>
        </div>
      </div>
    </div>
  )
}

export default History