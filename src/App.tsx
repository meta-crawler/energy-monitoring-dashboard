import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { SettingsProvider } from 'src/components/settings';
import Router from 'src/routes';

function App() {
  return (
    <div className="App">
      <SettingsProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </SettingsProvider>
    </div>
  );
}

export default App;
