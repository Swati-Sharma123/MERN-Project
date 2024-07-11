import React from 'react';
import Home from './Home/Home';
import {Routes,Route} from "react-router-dom";
import Courses from './Courses/Courses';
import Contact from './Contact/Contact';
export default function App() {
  return (
    <>
      <Routes>
     
        <Route path="/" element={<Home/>} />
        <Route path="/course" element={<Courses/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>                                                             
    </>
  )
}
