import React from 'react';
import { IoMdNotificationsOutline } from "react-icons/io";
const NotificationModal = ({ className, timeRemaining, onClose }) => {
  return (
    <div className="fixed inset-0 flex flex-col gap-4 items-center justify-center bg-gray-800 bg-opacity-70 z-50">
        <h2 className=" flex justify-center items-center gap-3 text-xl font-semibold text-pink-20 bg-slate-50 rounded-2xl p-3">
           <IoMdNotificationsOutline/>
          {className} is starting in {timeRemaining} minutes.
        </h2>
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        
        <p className='font-outfit text-2xl font-bold leading-[23.76px] text-center text-blue-600'>You can join the live class 5 minutes before it starts. Please wait.</p>
        <div className="flex justify-center mt-4">
      <button
        onClick={onClose}
        className="px-4 py-2 bg-blue-600 text-white rounded-xl"
      >
        Okay
      </button>
    </div>
      </div>
    </div>
  );
};

export default NotificationModal;
