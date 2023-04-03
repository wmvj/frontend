import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const Phrase = () => {
  const { phrase, phraseAuthor } = useContext(AppContext);

  return (
    <div className="phrase">
      "{phrase}"
      <div className="author">{phraseAuthor}</div>
    </div>
  );
};

export default Phrase;