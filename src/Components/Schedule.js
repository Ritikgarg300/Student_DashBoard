import React from 'react';
import { schedule } from '../data';
import { BiVideoRecording } from "react-icons/bi";
const Schedule = () => {
  return (
    <div>
      <h2 className="font-outfit text-2xl font-bold text-left leading-[23.76px] mb-6">Your Class Schedule</h2>
      <div className="bg-white rounded-3xl shadow-lg p-4 mb-[20px]">
        {schedule.map(item => (
          <div key={item.id} className="flex justify-between bg-grey-10 rounded p-4 mb-4">
           
            <div className="flex justify-center items-center gap-3">
            <BiVideoRecording size={20} className="text-blue-90"/> 
            <div>
            <p className="font-outfit text-[12px] font-light leading-[15.12px] text-left text-blue-5">{item.subject}</p>
            <p className='font-outfit text-[16px] font-semibold leading-[20.16px] text-left text-blue-15'>{item.time}</p>
            </div>
              
            </div>
            <div>
              <p className="text-sm text-blue-5">{item.day}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
