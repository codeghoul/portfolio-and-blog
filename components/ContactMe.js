import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm } from 'react-hook-form'

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (formData) => {
    window.location.href = `mailto:jayesh.patel.2197@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  }

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          I have got just what you need.{' '}
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400'>
            Let's Talk.
          </span>
        </h4>
        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-blue-500 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+91 7974047960</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-blue-500 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>Bengaluru, Karnataka</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-blue-500 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>jayesh.patel.2197@gmail.com</p>
          </div>

          <form
            className='flex flex-col space-y-2 w-fit mx-auto'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='flex space-x-2'>
              <input
                {...register('name')}
                className='outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-gray-500 text-gray-500 placeholder-gray-500 transition-all focus:border-gray-500/40 focus:text-gray-500/40 hover:border-gray-500/40'
                type='text'
                placeholder='Name'
              />
              <input
                {...register('email')}
                className='outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-gray-500 text-gray-500 placeholder-gray-500 transition-all focus:border-gray-500/40 focus:text-gray-500/40 hover:border-gray-500/40'
                type='text'
                placeholder='Email'
              />
            </div>
            <input
              {...register('subject')}
              className='outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-gray-500 text-gray-500 placeholder-gray-500 transition-all focus:border-gray-500/40 focus:text-gray-500/40 hover:border-gray-500/40'
              type='text'
              placeholder='Subject'
            />
            <textarea
              {...register('message')}
              className='outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-gray-500 text-gray-500 placeholder-gray-500 transition-all focus:border-gray-500/40 focus:text-gray-500/40 hover:border-gray-500/40'
              placeholder='Message'
            />
            <button
              type='submit'
              className='bg-blue-500 py-5 px-10 rounded-md text-black font-bold text-lg'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
