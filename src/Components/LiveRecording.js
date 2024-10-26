import React from 'react';

const Modal = ({ isOpen, onClose, imageSrc, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className=" rounded-lg p-4 max-w-[70%] w-full mx-auto relative bg-blue-20">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white  hover:text-gray-900 text-3xl p-2 rounded-full"
          aria-label="Close"
        >
          &times; 
        </button>
        <h2 className="mt-2 text-lg font-bold text-center mb-5">{title}</h2>
        <div className="rounded-md">
        <img src={imageSrc} alt={title} className="w-full h-auto object-cover rounded-md" />
        </div>
        
        
      </div>
    </div>
  );
};

export default Modal;
