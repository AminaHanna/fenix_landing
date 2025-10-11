import React, { useState } from 'react';
import { FaCalendar, FaChevronLeft, FaChevronRight, FaPlane } from 'react-icons/fa';
// import { ChevronLeft, ChevronRight, Calendar, Plane } from 'lucide-react';

const AviationCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 5, 1)); // June 2025
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample images for each date (you can replace with actual images)
  const dateImages = {
    '2025-06-02': [
      'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1556388158-158dc1a8dd8c?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1583351388158-bb4d9e2b0c15?w=400&h=300&fit=crop'
    ],
    '2025-06-03': [
      'https://images.unsplash.com/photo-1569629141945-ba7c17016a88?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1583351491866-31d0ed3c6e9c?w=400&h=300&fit=crop'
    ],
    '2025-06-05': [
      'https://images.unsplash.com/photo-1583351491866-31d0ed3c6e9c?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=400&h=300&fit=crop'
    ],
    '2025-06-06': [
      'https://images.unsplash.com/photo-1556388158-158dc1a8dd8c?w=400&h=300&fit=crop'
    ],
    '2025-06-08': [
      'https://images.unsplash.com/photo-1569629141945-ba7c17016a88?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1583351491866-31d0ed3c6e9c?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=400&h=300&fit=crop'
    ],
    '2025-06-09': [
      'https://images.unsplash.com/photo-1583351388158-bb4d9e2b0c15?w=400&h=300&fit=crop'
    ]
  };

  const emptyLegDates = [2, 3, 5, 6, 8, 9, 11, 16, 17, 19, 20, 22, 25, 27, 29, 31];

  const months = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
    'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
  ];

  const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = (firstDay.getDay() + 6) % 7; // Monday = 0

    const days = [];

    // Previous month's trailing days
    const prevMonth = new Date(year, month - 1, 0);
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonth.getDate() - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, prevMonth.getDate() - i)
      });
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        isCurrentMonth: true,
        date: new Date(year, month, day)
      });
    }

    // Next month's leading days
    const remainingDays = 42 - days.length;
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        date: new Date(year, month + 1, day)
      });
    }

    return days;
  };

  const isEmptyLegDate = (day, isCurrentMonth) => {
    if (!isCurrentMonth) return false;
    return emptyLegDates.includes(day);
  };

  const handleDateClick = (dayObj) => {
    if (dayObj.isCurrentMonth) {
      setSelectedDate(dayObj.date);
      setCurrentImageIndex(0);
    }
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleYearChange = (increment) => {
    setCurrentDate(new Date(currentDate.getFullYear() + increment, currentDate.getMonth(), 1));
  };

  const formatDateKey = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  const selectedDateImages = selectedDate ? dateImages[formatDateKey(selectedDate)] || [] : [];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev > 0 ? prev - 1 : selectedDateImages.length - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev < selectedDateImages.length - 1 ? prev + 1 : 0
    );
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="flex bg-gray-100 min-h-screen p-4 gap-6">
      {/* Left Side - Image Slider */}
      <div className="w-96 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-lg overflow-hidden shadow-2xl">
        {selectedDate && selectedDateImages.length > 0 ? (
          <div className="h-full flex flex-col">
            <div className="bg-black bg-opacity-50 text-white p-4 text-center">
              <h3 className="text-lg font-bold flex items-center justify-center gap-2">
                <FaPlane className="w-5 h-5" />
                Empty Leg Journeys
              </h3>
              <p className="text-sm opacity-90">At an Unexpected Price</p>
            </div>

            <div className="flex-1 relative">
              <img
                src={selectedDateImages[currentImageIndex]}
                alt={`Flight ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {selectedDateImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                  >
                    <FaChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                  >
                    <FaChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {selectedDateImages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="bg-black bg-opacity-80 text-white p-4">
              <p className="text-sm mb-2">
                <strong>Date:</strong> {selectedDate?.toLocaleDateString('en-US', {
                  day: '2-digit',
                  month: 'short',
                  year: '2-digit'
                })}
              </p>
              <p className="text-sm mb-2"><strong>Route:</strong> Goa (GOI) to Dubai (OMDW)</p>
              <p className="text-sm mb-2"><strong>Passengers (PAX):</strong> 14 Max</p>
              <p className="text-sm mb-2"><strong>Aircraft:</strong> Global 6000</p>
              <p className="text-sm"><strong>YOM:</strong> 2015</p>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-white">
            <div className="text-center">
              <FaCalendar className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-bold mb-2">Select a Date</h3>
              <p className="text-sm opacity-80">Click on any highlighted date to view available flights</p>
            </div>
          </div>
        )}
      </div>

      {/* Right Side - Calendar */}
      <div className="flex-1 bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white p-6 relative">
          <div className="absolute top-4 right-6">
            <div className="text-right">
              <div className="text-4xl font-bold">{currentDate.getFullYear()}</div>
              <div className="text-2xl font-light bg-black bg-opacity-30 px-3 py-1 rounded">
                {months[currentDate.getMonth()]}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleYearChange(-1)}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-all"
              >
                <FaChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => handleYearChange(1)}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-all"
              >
                <FaChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={handlePrevMonth}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-all"
              >
                <FaChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextMonth}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-all"
              >
                <FaChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Week Days */}
        <div className="grid grid-cols-7 bg-gray-50 border-b">
          {weekDays.map(day => (
            <div key={day} className="p-4 text-center font-semibold text-gray-600 border-r last:border-r-0">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-0">
          {days.map((dayObj, index) => {
            const isEmptyLeg = isEmptyLegDate(dayObj.day, dayObj.isCurrentMonth);
            const isSelected = selectedDate &&
              dayObj.date.toDateString() === selectedDate.toDateString();

            return (
              <div
                key={index}
                onClick={() => handleDateClick(dayObj)}
                className={`
                  h-20 border-r border-b last:border-r-0 flex items-center justify-center text-2xl font-bold cursor-pointer transition-all duration-200
                  ${!dayObj.isCurrentMonth
                    ? 'text-gray-300 bg-gray-50'
                    : isEmptyLeg
                      ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white hover:from-yellow-500 hover:to-yellow-700 shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }
                  ${isSelected ? 'ring-4 ring-yellow-400 ring-opacity-50' : ''}
                `}
              >
                <span className={`${isEmptyLeg ? 'drop-shadow-md' : ''}`}>
                  {dayObj.day}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white p-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 bg-yellow-400 rounded"></div>
            <span className="text-sm font-medium">All Gold highlighted dates are scheduled empty leg flights</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AviationCalendar;
