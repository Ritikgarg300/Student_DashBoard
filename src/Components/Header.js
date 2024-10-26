import React from 'react';

const Header = () => {
  return (
    <div className="bg-blue-20 text-white p-4 flex justify-between items-center h-[98px] p-12">
      <div><img
          src="https://s3-alpha-sig.figma.com/img/1851/a76d/5564585b3e54113002a9ffd6e566e393?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gi~7T4kW0Oq~5ivG5TTSVnxzxUdm27neii4fCZRfvd3HxdiHmaN3OCXrWPqtv4~6x5mNfzykMkr8KBHJ25UoTsu8GyZ~f8d-JqfgCMfxpoyvXgZK6ZJyplt7CkXez~Ysxr1OZZKTCTOekmofloxAUVgqNrEEb1gBv-rH7szYCOOqXAODlNpU-LlK-fMBkAD1vVaNgPdfuH6FY6jK7bDPnUQ-BO2V0lEiImmm4Xf7s8QPkf2dPgvHcNLHUU2tYCqntBvR7w0lir7hLm97taIcugZ7pVMCzS3DSBAG9Qe9lb3LUKpRwHL2y2DA2IhVPbmopN5vUpcHsYraCl9S442AjQ__"
          alt="Logo"
          className="h-12" 
        /></div>
      <div className="font-outfit text-3xl font-bold leading-[31.68px] text-center">Student Portal</div>
      <div className="hidden md:block">
        <div className="font-outfit text-[23.33px] font-semibold leading-[29.4px] text-right">Hello, Gabrisa!</div>
        <p className="font-outfit text-[12px] font-normal leading-[15.12px] text-right">Class 7, Math + Science</p>
        
      </div>
    </div>
  );
};

export default Header;