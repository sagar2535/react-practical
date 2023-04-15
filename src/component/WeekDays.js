import React, { useState } from 'react';

import './WeekDays.css';

function WeekDays() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const goToNextWeek = () => {
    const nextWeek = new Date(selectedDate);
    nextWeek.setDate(selectedDate.getDate() + 7);
    setSelectedDate(nextWeek);
  };

  const goToPreviousWeek = () => {
    const previousWeek = new Date(selectedDate);
    previousWeek.setDate(selectedDate.getDate() - 7);
    setSelectedDate(previousWeek);
  };

  return (
    <div>
      <div className='btn1'>
        <button onClick={goToPreviousWeek}>Previous Week</button>
        <p className='heading-date'> {selectedDate.toDateString()}</p>
        <button onClick={goToNextWeek}>Next Week</button>
      </div>
    </div>
  );
}

export default WeekDays;
