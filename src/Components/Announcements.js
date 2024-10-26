import React from 'react';
import { announcements } from '../data';
import { FaSuitcaseRolling } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Announcements = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <h2 className="font-outfit text-2xl font-bold text-left leading-[23.76px] mb-6">Announcements</h2>
      <ul className="bg-white rounded-3xl shadow-lg p-4">
        <div className="hidden lg:block">
       
          {announcements.map(announcement => (
            <li key={announcement.id} className="bg-grey-20 text-[#4749B3] mb-2 rounded-lg p-3 font-outfit text-[12px] font-light leading-[15.12px] text-left">
              <div className='flex gap-4'><FaSuitcaseRolling />{announcement.text}</div>  
            </li>
          ))}
        </div>
        
       
        <div className="lg:hidden">
          <Slider {...settings}>
            {announcements.map(announcement => (
              <div key={announcement.id} className="bg-grey-20 text-[#4749B3] mb-2 rounded-lg p-3 font-outfit text-[12px] font-light leading-[15.12px] text-left">
                <div className='flex gap-4'><FaSuitcaseRolling />{announcement.text}</div>
              </div>
            ))}
          </Slider>
        </div>
      </ul>
    </div>
  );
};

export default Announcements;
