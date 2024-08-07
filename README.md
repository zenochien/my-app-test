# Amplify Authentication React App

This React application demonstrates how to integrate AWS Amplify for authentication using the `withAuthenticator` higher-order component (HOC). 

## Overview

- **Authentication**: Easily add user authentication with AWS Amplify.
- **UI Integration**: Use `withAuthenticator` to handle authentication flows.
- **Sign Out**: Simple sign-out functionality included.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- AWS Amplify CLI installed (`npm install -g @aws-amplify/cli`)

### Setup and Installation

1. **Clone the Repository:**

```bash
   git clone https://github.com/your-username/amplify-authentication-react-app.git
   cd amplify-authentication-react-app
```
2. Install Dependencies:

```bash
npm install
```

3. Configure AWS Amplify:

- Initialize Amplify in your project:

```bash
amplify init
```

- Add authentication:

```bash
amplify add auth
```

- Push changes to AWS:

```bash
amplify push
```
- This will generate the aws-exports.js file required for configuration.

4. The main component of the application is **App.js**. Here’s a simplified version:

```javascript
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <>
      <h1>Hello, {user.username}!</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);
```

***Some pictures***
![Authencation](/images/1.png?featherlight=false&width=90pc)
![Authencation](/images/2.png?featherlight=false&width=90pc)
![Authencation](/images/3.png?featherlight=false&width=90pc)
