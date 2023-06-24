import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { SettingsProvider } from 'src/components/settings';

import ComingSoonPage from 'src/pages/ComingSoonPage';
import NavMini from 'src/layouts/dashboard/nav/NavMini';

function App() {
  return (
    <div className="App">
      <SettingsProvider>
        <BrowserRouter>
          <NavMini />
          <ComingSoonPage />
        </BrowserRouter>
      </SettingsProvider>
    </div>
  );
}

export default App;
