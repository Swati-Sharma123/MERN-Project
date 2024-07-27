import React from 'react'
import { useForm } from "react-hook-form";

export default function Contactss() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    < >
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 pt-52 flex items-center justify-center'>
      <form >
        <h3 className='font-bold text-xl'>Contact Us</h3>
        <div className='mt-5 m space-y-2'>
        <span>Name</span>
        <br/>
        <input type='Name'
        placeholder='Enter Your Full Name'
        className='w-80 px-3 border rounded-md outline-none space-y-1'
        {...register("Name", { required: true })}
        />
        <br/>
        {errors.Name && <span className='text-sm text-red-500'>This field is required</span>}
      </div>

      <div className='mt-5 m space-y-2'>
        <span>Email</span>
        <br/>
        <input type='email'
        placeholder='Enter Your Email'
        className='w-80 px-3 border rounded-md outline-none space-y-1'
        {...register("Email", { required: true })}
        />
        <br/>
        {errors.Email && <span className='text-sm text-red-500'>This field is required</span>}
      </div>

      <div className='mt-5 m space-y-2'>
        <span>Message</span>
        <br/>
        <textarea type='text'
        placeholder='Type Your Message'
        className='w-80 px-3 border rounded-md outline-none space-y-1'
        {...register("Email", { required: true })}
        />
        <br/>
        {errors.Email && <span className='text-sm text-red-500'>This field is required</span>}
      </div>

      <div className='flex justify-around mt-4'>
        <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-500 duration-200'>Submit</button>
      </div>

      </form>
    </div>
    </>
  )
}
