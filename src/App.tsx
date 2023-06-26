import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { SettingsProvider } from 'src/components/settings';

import ComingSoonPage from 'src/pages/ComingSoonPage';
import NavVertical from 'src/layouts/dashboard/nav/NavVertical';

function App() {
  return (
    <div className="App">
      <SettingsProvider>
        <BrowserRouter>
          <NavVertical />
          <ComingSoonPage />
        </BrowserRouter>
      </SettingsProvider>
    </div>
  );
}

export default App;
