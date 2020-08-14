import React, { useState } from 'react';
import Routes from './routes';
import { AppContext } from './libs/contextLib';

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  
  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <Routes />
    </AppContext.Provider>
  );
}

export default App;
