import React, { useEffect, useState } from 'react';
import WeekView from './WeekView';
import ImageSlider from './ImageSlider';
import axios from 'axios';
import { SERVER_URL } from '../../api/baseUrl';

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function Calender() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = monthNames[today.getMonth()];

  const [calenderDataState, setCalenderDataState] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]); // <-- new state

  // useEffect(() => {
  //   const fetchCalendarData = async () => {
  //     try {
  //       const response = await axios.get(`${SERVER_URL}/admin/calender?year=${currentYear}&month=${today.getMonth()}`);
  //       if (response?.data?.result) {
  //         setCalenderDataState(response.data.result);
  //       }
  //     } catch (error) {
  //       console.error('Failed to fetch calendar data:', error);
  //     }
  //   };

  //   fetchCalendarData();
  // }, [currentYear, today.getMonth()]);
  return (
    <div className="flex gap-4 bg-white max-w-[1030px] ms-36 justify-end h-[500px]">
      <div className="h-full w-[300px] relative">
        <ImageSlider images={selectedImages} />
      </div>
      <div className="font-fritz-regular flex flex-col justify-end items-end me-4">
        <p className="text-[50px] leading-8 text-[#D79B2A] font-medium">{currentYear}</p>
        <p className="text-[40px] text-[#D79B2A] font-medium">{currentMonth}</p>
        <WeekView items={calenderDataState} onSelectImages={setSelectedImages} />

      </div>
    </div>
  );
}

export default Calender;
