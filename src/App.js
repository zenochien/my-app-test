import React from "react";
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter as Router } from 'react-router-dom';

import awsExports from './aws-exports';
import MyAppLayout from './pages/app-layout/MyAppLayout';
import TopNavigationComponent from "./pages/app-layout/TopNavigationComponent";

// Configure Amplify
Amplify.configure(awsExports);

function App() {
  return (
    <Router>
      <TopNavigationComponent />
      <MyAppLayout />
    </Router>
  );
}

export default withAuthenticator(App);
