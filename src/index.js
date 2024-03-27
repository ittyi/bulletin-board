import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import RootThreadList from "./components/RootThreadList";
import ThreadNew from "./components/ThreadNew";
import ThreadDetail from "./components/ThreadDetail";
import Root from './components/Root';

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <RootThreadList />,
      },
      {
        path: "/thread/new",
        element: <ThreadNew />,
      },
      {
        path: "/thread/:threadId",
        element: <ThreadDetail />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
