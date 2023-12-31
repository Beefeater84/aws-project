import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {RouterProvider,} from "react-router-dom";
import {router} from "./application/routes/routes";
import {Authenticator} from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Authenticator.Provider>
          <RouterProvider router={router} />
      </Authenticator.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
