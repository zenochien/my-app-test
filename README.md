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

4. Modify the routes and components in **MyAppLayout.js** as needed:

```javascript
import Home from "../Home";

<Routes>
    <Route path="/Home" element={<Home setContentHeader={setContentHeader} />} />
    {/* Add other routes here */}
</Routes>
```
5. The side navigation component Navigations.js:

```javascript
import React from "react";
import { SideNavigation } from "@cloudscape-design/components";

export const Navigations = (props) => {
    const navItems = [
        { type: "link", text: "Home", href: "#/home" },
    ];

    return (
        <SideNavigation
            activeHref={document.location.hash}
            header={props.header}
            items={props.items || navItems}
            toolsHide={true}
            {...props}
        />
    );
};

export default Navigations;
```

***Some pictures***
![Authencation](/images/4.png?featherlight=false&width=90pc)
