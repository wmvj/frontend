import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [time, setTime] = useState('00:00');
  const [greeting, setGreeting] = useState('--');
  const [phrase, setPhrase] = useState('');
  const [phraseAuthor, setPhraseAuthor] = useState('');

  useEffect(() => {
    const getPhrase = async () => {
      const req = await axios.get('https://allugofrases.herokuapp.com/frases/random');
      const json = await req.data;
      setPhrase(json.frase);
      setPhraseAuthor(json.autor);
    };
    getPhrase();
  }, []);

  useEffect(() => {
    let timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    updateGreeting();
  }, [time]);

  const updateTime = () => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let hourStr = hours < 10 ? '0' + hours : hours.toString();
    let minStr = minutes < 10 ? '0' + minutes : minutes.toString();

    setTime(`${hourStr}:${minStr}`);
  }

  const updateGreeting = () => {
    let now = new Date();
    let hours = now.getHours();
    if (hours > 0 && hours < 12) {
      setGreeting(`Bom dia, ${myName}.`);
    } else if (hours >= 12 && hours < 18) {
      setGreeting(`Boa tarde, ${myName}.`);
    } else {
      setGreeting(`Boa noite, ${myName}.`);
    }
  }

  const values = {
    time,
    greeting,
    phrase,
    phraseAuthor,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
