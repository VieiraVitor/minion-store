import React, { useState, useEffect } from 'react';
import Routes from './routes';
import { AppContext } from './libs/contextLib';
import { Auth } from 'aws-amplify';

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  
  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad(){
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if( e !== 'No current user') {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }

  return (
    !isAuthenticating &&
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <Routes />
    </AppContext.Provider>
  );
}

export default App;
