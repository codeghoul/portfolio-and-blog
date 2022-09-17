import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

const Hero = () => {
  const { text, count } = useTypewriter({
    words: [
      "Hi! The Name's Jayesh.",
      'TheGuyWhoLovesToTravel.java',
      '<ButLovesCodingMore />',
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src='https://lh3.googleusercontent.com/a-/AFdZucrQh8ghLmSjt5hchWxr-2ujbAnx3fXL09_MwKYDfw=s576-p-rw-no'
        alt='myself'
      ></img>
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px] bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400'>
          Software Engineer
        </h2>
        <h1 className='text-xl lg:text-2xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='blue' />
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
            <button className='px-6 py-2 border border-black rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-blue-400 hover:text-blue-400'>
              About
            </button>
          </Link>
          <Link href='#experience'>
            <button className='px-6 py-2 border border-black rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-blue-400 hover:text-blue-400'>
              Experience
            </button>
          </Link>
          <Link href='#skills'>
            <button className='px-6 py-2 border border-black rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-blue-400 hover:text-blue-400'>
              Skills
            </button>
          </Link>
          <Link href='#projects'>
            <button className='px-6 py-2 border border-black rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-blue-400 hover:text-blue-400'>
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
