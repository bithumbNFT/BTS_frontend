import React, { useState } from 'react';
import useInterval from 'hooks/useInterval';

const Timer = ({ endDate }) => {
  const [dateTime, setDateTime] = useState();

  const getTime = () => {
    const endDay = new Date(endDate);
    const currDay = new Date();

    let diff = endDay - currDay;
    const diffDays = Math.floor(
      (endDay.getTime() - currDay.getTime()) / (1000 * 60 * 60 * 24),
    );
    diff -= diffDays * (1000 * 60 * 60 * 24);
    const diffHours = Math.floor(diff / (1000 * 60 * 60));
    diff -= diffHours * (1000 * 60 * 60);
    const diffMin = Math.floor(diff / (1000 * 60));
    diff -= diffMin * (1000 * 60);
    const diffSec = Math.floor(diff / 1000);

    const hours = diffHours < 10 ? `0${diffHours}` : diffHours;
    const miniutes = diffMin < 10 ? `0${diffMin}` : diffMin;
    const seconds = diffSec < 10 ? `0${diffSec}` : diffSec;

    const result = `${hours}:${miniutes}:${seconds}`;
    if (result === 'NaN:NaN:NaN') {
      return '00:00:60';
    }
    return result;

    // return `${hours}:${miniutes}:${seconds}`;
  };

  useInterval(
    () => {
      setDateTime(getTime());
    },
    dateTime === '00:00:00' ? null : 1000,
  );

  return <p>{dateTime}</p>;
};

export default Timer;
