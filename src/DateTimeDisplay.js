import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={`${isDanger ? 'countdown danger' : 'countdown'}`}>
      <h2 className='time-top'>{value}</h2>
      <h2 className='time-bottom'>{type}</h2>
    </div>
  );
};

export default DateTimeDisplay;