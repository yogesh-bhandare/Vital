import React from 'react'

function Landing() {
  return (
    <div className='px-20 w-full h-screen bg-[url("./assets/images/background3.jpeg")] bg-no-repeat bg-center bg-cover flex'>
        <div className='w-1/2 h-screen flex-row items-start font-["Roboto"] justify-center mt-[40vh] leading-none tracking-tight'>
            {/* {["Welcome to NutriGuide", "An AI-powered recommendation system designed to help you choose the best dietary supplements tailored to your personal health needs."].map((item,index)=>{
              return(
                <h1 className={` font-extrabold font-["Roboto"] text-6xl leading-none tracking-tight ${index === 1 && 'font-medium text-2xl'}`}>{item}</h1>
              )})} */}
              <div className='flex font-extrabold  text-6xl '>
                <h1>Welcome to</h1>
                <h1 className='text-[#F20707] pl-3'>Vital</h1>
              </div>
              <div className='font-semibold text-2xl'>
                <h1>An <span className='text-[#F20707]'>AI-powered recommendation system</span> designed to help you choose the best dietary supplements tailored to your personal health needs.</h1>
              </div>
              <div className='button py-4'>
                <button className='px-6 py-2 bg-[#F20707] text-xl font-semibold rounded-md uppercase'>Get Your Recommendations</button>
              </div>
        </div>
    </div>
  )
}

export default Landing