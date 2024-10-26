import "./App.css";

import Announcements from "./Components/Announcements";
import Header from "./Components/Header";
import QuickLinks from "./Components/QuickLinks";
import Recordings from "./Components/Recordings";
import Schedule from "./Components/Schedule";
import vectorImage from './vectorImage.png'

import Notification from './Components/Notification'

function App() {
 
  return (
    <div className=" bg-grey-40  w-screen min-h-screen"
    style={{ 
      backgroundImage: `url(${vectorImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
     
    }}
    >
    <Header />
    <div className=" p-6 grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12   max-w-maxContent mx-auto">
      <div className='flex flex-col gap-6' >
      
      <Announcements />
      <Schedule />
      <Notification/>
      </div>
      
      <QuickLinks />
      <Recordings />
    </div>
  </div>
  );
}

export default App;
