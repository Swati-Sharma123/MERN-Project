import React from 'react';
import Home from './Home/Home';
import {Routes,Route} from "react-router-dom";
import Courses from './Courses/Courses';
import Contact from './Contact/Contact';
import SignUp from './Components/SignUp';
export default function App() {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/course" element={<Courses/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/signup' element={<SignUp/>} />

      </Routes> 
      </div>                                                            
    </>
  )
}
