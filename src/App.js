import React, { createContext, useState } from "react";
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter as Router } from 'react-router-dom';

import awsExports from './aws-exports';
import MyAppLayout from './pages/app-layout/MyAppLayout';
import TopNavigationComponent from "./pages/app-layout/TopNavigationComponent";

Amplify.configure(awsExports);

export const AuthContext = createContext();

function App({ signOut, user }) {
  return (
    <AuthContext.Provider value={{ user, signOut }}>
      <Router>
        <TopNavigationComponent />
        <MyAppLayout />
      </Router>
    </AuthContext.Provider>
  );
}

export default withAuthenticator(App);
