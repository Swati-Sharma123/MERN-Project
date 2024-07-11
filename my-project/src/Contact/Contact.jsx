import React from 'react'
import Navbar from '../Components/Navbar'
import Contactss from '../Components/Contactss'
import Footer from '../Components/Footer'

export default function Contact() {
  return (
    <>
      <div>
      <Navbar/>
      </div>
        
        <div className='min-h-screen'>
            <Contactss/>
        </div>
        <Footer/>
    </>
  )
}
