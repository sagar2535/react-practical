import React, { useState } from 'react';

import './WorkSchedule.css';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const hoursOfDay = Array.from({ length: 16 }, (_, i) => {
  const hour = i + 8;
  const time = hour > 12 ? `${hour - 12}pm` : `${hour}am`;
  return time;
});

const WorkSchedule = () => {
  const [schedule, setSchedule] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
  });

  const handleCheckboxChange = (day, time) => {
    const currentSchedule = schedule[day];
    const updatedSchedule = currentSchedule.includes(time)
      ? currentSchedule.filter((t) => t !== time)
      : [...currentSchedule, time];
    setSchedule({ ...schedule, [day]: updatedSchedule });
  };

  return (
    <div>
      {daysOfWeek.map((day) => (
        <div className='week__days' key={day}>
          <h3>{day}</h3>
          {hoursOfDay.map((time) => (
            <label key={`${day}-${time}`}>
              <input
                className='checkboxes'
                type='checkbox'
                checked={schedule[day].includes(time)}
                onChange={() => handleCheckboxChange(day, time)}
              />
              {time}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WorkSchedule;
