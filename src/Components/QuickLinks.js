import React from 'react';
import { PiBookOpenTextLight } from "react-icons/pi";
import { MdOutlineContactPhone } from "react-icons/md";
import { MdOutlineWhatsapp } from "react-icons/md";
const QuickLinks = () => {
  return (
    <div className="p-4 space-y-4 ">
      <h2 className="font-outfit text-2xl font-bold text-left leading-[23.76px] mb-6">Quick Links</h2>
      
      <div className="bg-blue-90 hover:bg-white p-4 text-white hover:text-blue-90 rounded-3xl transition h-[170px] flex flex-col justify-center items-center">
        <PiBookOpenTextLight className="text-3xl mb-2" />
        <p className='font-outfit text-[24px] font-bold leading-[23.76px] text-center mb-2'>Canvas LMS</p>
        <p className="ml-[20%] mr-[20%] font-outfit text-[11.91px] font-normal leading-[11.79px] text-center">Click here to access your LMS portal for assignments, class recordings and notes.</p>
      </div>
      
      <div className="bg-pink-20 hover:bg-white p-4 text-white hover:text-pink-20 rounded-3xl transition h-[170px] flex flex-col justify-center items-center">
        <MdOutlineContactPhone className="text-3xl mb-2" />
        <p className='font-outfit text-[24px] font-bold leading-[23.76px] text-center  mb-2'>Join Live Class</p>
        <p className="ml-[20%] mr-[20%] font-outfit text-[11.91px] font-normal leading-[11.79px] text-center">Class 7 Math is starting in 1 hour, 35 minutes.</p>
      </div>
      
      <div className="bg-blue-20 hover:bg-white p-4 text-white hover:text-blue-20 rounded-3xl transition h-[170px] flex flex-col justify-center items-center">
       <MdOutlineWhatsapp className="text-3xl mb-2" />
        <p className=' font-outfit text-[24px] font-bold leading-[23.76px] text-center  mb-2'>Contact Teacher</p>
        <p className="ml-[20%] mr-[20%] font-outfit text-[11.91px] font-normal leading-[11.79px] text-center">Click here to contact your teacher for any doubts or concerns.</p>
      </div>
    </div>
  );
};

export default QuickLinks;
