import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import RootThreadList from "./routes/RootThreadList";
import ThreadNew from "./components/ThreadNew";
import ThreadDetail from "./components/ThreadDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootThreadList />,
  },
  {
    path: "/thread/new",
    element: <ThreadNew />,
  },
  {
    path: "/thread/:thread_id",
    element: <ThreadDetail />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
