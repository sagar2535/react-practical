import React, { useState } from 'react';

import './TimeZone.css';
function TimezoneSelect() {
  const [selectedTimezone, setSelectedTimezone] = useState('UTC');
  const timezones = [
    { value: 'UTC', label: 'Coordinated Universal Time (UTC)' },
    { value: 'America/New_York', label: 'Eastern Time (ET)' },
  ];

  const handleChange = (e) => {
    setSelectedTimezone(e.target.value);
  };

  return (
    <div className='time-zone-change'>
      <p className='time-zone-heading'> Time Zone</p>{' '}
      <select value={selectedTimezone} onChange={handleChange}>
        {timezones.map((timezone) => (
          <option key={timezone.value} value={timezone.value}>
            {timezone.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TimezoneSelect;
