import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const Greeting = () => {
  const { greeting } = useContext(AppContext);

  return <h3>{greeting}</h3>;
};

export default Greeting;