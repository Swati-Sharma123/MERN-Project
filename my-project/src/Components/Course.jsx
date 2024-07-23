import React from 'react';
import Cards from "./Cards";
import list from "./../../public/list.json";
import {Link} from 'react-router-dom';
export default function Course() {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 pt-20'>
            <div className='items-center justify-center text-center'>
              <h1 className=" mt-28 text-2xl  md:text-4xl">
              We're delighted to have you{" "}
              <span className=" mt-28 text-pink-500"> Here! :)</span>
            </h1>
            <p className='mt-12'>
            1. He book provides insight on how sleep affects cognitive and physical performance in both the short and long term, and what you can do to improve your own sleep2. The book explains how we can harness sleep to improve learning, mood and energy levels, regulate hormones, prevent cancer, Alzheimer's and diabetes, slow the effects of aging, and increase longevity1. regulate hormones, prevent cancer, Alzheimer's and diabetes, slow the effects of aging, and increase longevity1.
            </p>
            <Link to="/">
              <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
              Back
              </button>
            </Link>
            </div> 
            <div className=" mt-12 grid grid-cols-1 md: grid grid-cols-3 gap-10">
            {
              list.map((item)=>(
                <Cards key={item.id} item={item}/>
              ))
            }
            </div>
        </div>
    </>
  )
}
