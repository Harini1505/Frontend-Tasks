// App.jsx

import React from 'react';
import { LanguageProvider } from './LanguageContext';
import Welcome from './Welcome';

function LanguageSwitcher() {
  return (
    <LanguageProvider>
      <Welcome />
    </LanguageProvider>
  );
}

export default LanguageSwitcher;
