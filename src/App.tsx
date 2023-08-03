import React from 'react';
import 'src/_mock';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from 'src/redux/store';
import Router from 'src/routes';
import { SettingsProvider } from 'src/sections/settings';
import { AuthProvider } from 'src/auth/JwtContext';

function App() {
  return (
    <AuthProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SettingsProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </SettingsProvider>
        </PersistGate>
      </ReduxProvider>
    </AuthProvider>
  );
}

export default App;
