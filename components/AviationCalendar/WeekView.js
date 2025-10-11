import React, { useState, useMemo, useEffect } from 'react';

// Props & Types
const WeekView = ({ items, onSelectImages }) => {

  // Generate calendar grid
  const getMonthCalendar = (year, month) => {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const daysInMonth = lastDayOfMonth.getDate();
    const startDay = firstDayOfMonth.getDay(); // 0 = Sunday

    const calendarDays = [];

    for (let i = startDay - 1; i >= 0; i--) {
      const date = new Date(year, month, -i);
      calendarDays.push({ date, isCurrentMonth: false });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      calendarDays.push({ date, isCurrentMonth: true });
    }

    const remaining = 7 - (calendarDays.length % 7);
    if (remaining < 7) {
      for (let i = 1; i <= remaining; i++) {
        const date = new Date(year, month + 1, i);
        calendarDays.push({ date, isCurrentMonth: false });
      }
    }

    return calendarDays;
  };

 const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);

  const itemMap = useMemo(() => {
    const map = new Map();
    items.forEach(item => {
      const localDate = new Date(item.selectedDate).toDateString();
      map.set(localDate, item);
    });
    return map;
  }, [items]);

  const calendar = getMonthCalendar(today.getFullYear(), today.getMonth());

  const isSameDate = (d1, d2) =>
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  // 📸 Notify parent of selected images
  useEffect(() => {
    const selectedImages = itemMap.get(selectedDate.toDateString())?.images ?? [];
    onSelectImages(selectedImages);
  }, [selectedDate, itemMap, onSelectImages]);

  return (
    <div className='font-fritz-regular' style={{ width: '700px', backgroundColor: 'white' }}>
      {/* Weekdays Header */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          fontWeight: 'bold',
          marginBottom: '0px',
        }}
      >
        {weekdays.map((day) => (
          <div
            key={day}
            style={{
              textAlign: 'center',
              height: '40px',
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '20px',
              color: 'black',
            }}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          backgroundColor: 'white',
        }}
      >
        {calendar.map((day, index) => {
          const isToday = isSameDate(day.date, today);
          const isSelected = isSameDate(day.date, selectedDate);
          const hasData = itemMap.has(day.date.toDateString());

          return (
            <div
              key={index}
              className='flex-1'
              onClick={() => day.isCurrentMonth && setSelectedDate(day.date)}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '18px',
                cursor: day.isCurrentMonth ? 'pointer' : 'not-allowed',
                fontWeight: isToday ? 'bold' : '600',
              }}
            >
              <div
                className={`
                  p-4 
                  ${isSelected ? 'text-[#D79B2A]' : day.isCurrentMonth ? 'text-black' : 'text-gray-400'}
                `}
                style={{
                  color: hasData ? ' #D79B2A' : '', // 🟡 underline if it has Mongo data
                }}
              >
                {String(day.date.getDate()).padStart(2, '0')}
              </div>
            </div>
          );
        })}
      </div>

      <div className='flex items-center gap-2 ms-4 pb-4'>
        <div className="bg-[#D79B2A] w-4 h-4" ></div>
        <p className='text-[#D79B2A] font-fritz-regular text-lg'>All Gold highlighted dates are scheduled empty leg flights</p>
      </div>

    </div>
  );
};

export default WeekView;
