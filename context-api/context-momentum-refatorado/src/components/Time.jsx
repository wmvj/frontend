import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const Time = () => {
  const { time } = useContext(AppContext);

  return <h1>{time}</h1>;
};

export default Time;