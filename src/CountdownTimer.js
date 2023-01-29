import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './hooks/useCountdown';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <div
        href="https://www.taylorswift.com/events/"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-container"
      >
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <h2>:</h2>
        <DateTimeDisplay value={hours} type={'Hrs'} isDanger={false} />
        <h2>:</h2>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <h2>:</h2>
        <DateTimeDisplay value={seconds} type={'Secs'} isDanger={false} />
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
