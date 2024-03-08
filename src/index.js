import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Qualification from './Pages/Qualification/Qualification';
import Contact from './Pages/Contact/Contact';
import Landing from './Pages/Landing/Landing';
import Profile from './Pages/Profile/Profile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}> 
      <Route path="" element={<Landing/> }/>
      <Route path="/profile" element={<Profile/> }/>
      <Route path="/Qualification" element={<Qualification/>} />
      <Route path="/Contact" element={<Contact />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);
