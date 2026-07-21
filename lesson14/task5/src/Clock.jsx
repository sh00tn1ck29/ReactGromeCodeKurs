import React, { useState, useEffect } from 'react';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() * 60000;
  const utcTime = currentTime.getTime() + utcOffset;
  return new Date(utcTime + 3600000 * offset);
};

const Clock = ({ location, offset }) => {
  const [time, setTime] = useState(() => moment(getTimeWithOffset(offset)).format('h:mm:ss A'));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment(getTimeWithOffset(offset)).format('h:mm:ss A'));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [offset]);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{time}</div>
    </div>
  );
};

export default Clock;
