import React, { useState, useEffect } from 'react';
import NotificationModal from './NotificationModal';


const classSchedule = [
  { name: "Math", startTime: "2024-10-26T10:44:00" },
  { name: "Science", startTime: "2024-10-26T10:21:00" }
];

const NotificationSystem = () => {
  const [upcomingClass, setUpcomingClass] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      
      
      classSchedule.forEach(classItem => {
        const classTime = new Date(classItem.startTime);
        const timeDiff = (classTime - now) / 60000; 
        
        if (timeDiff > 0 && timeDiff <= 5) {
          setUpcomingClass(classItem);
          setTimeRemaining(Math.ceil(timeDiff));
        }
      });
    }, 60000); 

    
    return () => clearInterval(intervalId);
  }, []);


  const closeModal = () => {
    setUpcomingClass(null);
    setTimeRemaining(null);
  };

  return (
    <div className="relative">
      {upcomingClass && (
        <NotificationModal 
          className={upcomingClass.name} 
          timeRemaining={timeRemaining} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default NotificationSystem;
