import React, { useState, useEffect } from 'react';
import './clock.scss';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

// const formatDate = offsetData => moment(getTimeWithOffset(offsetData)).format('LTS')

const Clock = props => {
  const [state, setState] = useState({
    location: props.location,
    time: moment(getTimeWithOffset(props.offset)).format('LTS'),
  });

  //   const time = moment(getTimeWithOffset(props.offset)).format('LTS');
  //   console.log(time);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setState({
        time: moment(getTimeWithOffset(props.offset)).format('LTS'),
        location: props.location,
      });
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const { location, time } = state;
  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{time}</div>
    </div>
  );
};

export default Clock;
