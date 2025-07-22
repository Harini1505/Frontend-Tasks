// Welcome.jsx

import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function Welcome() {
  const { language, toggleLanguage, translations } = useContext(LanguageContext);

  return (
    <>   
     <div>
      <br/>
      <hr/>
      <h2>{translations[language].greeting}</h2>
      <button onClick={toggleLanguage}>
        {translations[language].switchLang}
      </button>
    </div>
    </>

  );
}

export default Welcome;
