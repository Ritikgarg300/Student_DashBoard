import React, { useState } from "react";
import { recordings } from "../data";
import { RiSearch2Line } from "react-icons/ri";
import { RiPlayFill } from "react-icons/ri";
import Modal from "./LiveRecording"; 

const ClassRecordings = () => {
  const [weekFilter, setWeekFilter] = useState("This week");
  const [subjectFilter, setSubjectFilter] = useState("All subjects");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecording, setSelectedRecording] = useState(null); 

  const filteredRecordings = recordings.filter((recording) => {
    const matchesSubject =
      subjectFilter === "All subjects" ||
      recording.subject.includes(subjectFilter);
    const matchesSearch =
      searchQuery === "" ||
      recording.title.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSubject && matchesSearch;
  });

  const handleOpenModal = (recording) => {
    setSelectedRecording(recording); 
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRecording(null); 
  };

  return (
    <div className="mt-4">
      <h2 className="font-outfit text-2xl font-bold text-left leading-[23.76px] mb-6">
        Access Class Recordings
      </h2>

      <div className="bg-white p-4 rounded-lg w-[371px] h-[530px] shadow-lg">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for class recordings"
            className="pl-8 bg-grey-5 w-full px-3 py-2 rounded-md h-[2rem] font-outfit text-[12px] font-light leading-[11.88px] text-left"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <RiSearch2Line className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="font-outfit text-[10px] font-normal leading-[9.9px] text-left">
              Filter By :
            </p>
          </div>
          <div className="flex gap-2">
            <select
              className="p-1 rounded-lg h-[24px] text-[10px] bg-grey-5"
              value={weekFilter}
              onChange={(e) => setWeekFilter(e.target.value)}
            >
              <option value="This week" className="text-[10px]">
                This week
              </option>
              <option value="Last week">Last week</option>
              <option value="Older">Older</option>
            </select>

            <select
              className="p-1 rounded-lg h-[24px] text-[10px] bg-grey-5"
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value)}
            >
              <option value="All subjects">All subjects</option>
              <option value="Class 7 Math">Class 7 Math</option>
              <option value="Class 7 Science">Class 7 Science</option>
            </select>
          </div>
        </div>

        <div className="space-y-5 mt-6">
          {filteredRecordings.map((recording, index) => (
            <div
              key={index}
              className={`flex justify-between gap-2 border-b ${
                hoveredIndex === index ? "border-blue-800" : "border-gray-100"
              } p-3`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col justify-between items-start">
                <div className="space-y-1">
                  <p
                    className={`font-outfit text-[12px] font-medium leading-[11.88px] text-left`}
                    style={{ color: hoveredIndex === index ? "grey" : "blue" }}
                  >
                    {recording.subject}
                  </p>
                  <p
                    className="font-outfit text-base font-bold leading-[15.84px] text-left mx-auto"
                    style={{ color: hoveredIndex === index ? "#4749B3" : "black" }}
                  >
                    {recording.title}
                  </p>
                </div>

                <p className="text-grey-50 font-outfit text-[10px] font-normal leading-[9.9px] text-left">
                  {recording.date}
                </p>
              </div>
              <div
                className="relative h-[64px] w-[100px] overflow-hidden rounded-lg"
                onClick={() => handleOpenModal(recording)} 
              >
                <img
                  src={recording.thumbnail}
                  alt={recording.title}
                  className="w-full h-full object-cover transition duration-300 ease-in-out cursor-pointer"
                />
                <div
                  className={`absolute inset-0 ${
                    recording.subject === "Class 7 Science" ? "bg-pink-20" : "bg-blue-900"
                  } transition-opacity duration-300 ease-in-out opacity-75`}
                ></div>
                {hoveredIndex === index ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font text-sm">play now</span>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <RiPlayFill className="text-white text-3xl" />
                  </div>
                )}
              </div>
            </div>
          ))}
          {filteredRecordings.length === 0 && (
            <p className="text-gray-500 text-center">No recordings found.</p>
          )}
        </div>
      </div>

      
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imageSrc={selectedRecording?.thumbnail}
        title={selectedRecording?.title} 
      />
    </div>
  );
};

export default ClassRecordings;
