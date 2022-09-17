import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center snap-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src='https://lh3.googleusercontent.com/a-/AFdZucrQh8ghLmSjt5hchWxr-2ujbAnx3fXL09_MwKYDfw=s576-p-rw-no'
        transition={{ duration: 1.2 }}
        className='-mb-20 md:mb-0 flex-shrink-9 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      ></motion.img>

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a{' '}
          <span className='underline decoration-cyan-400'>little</span>{' '}
          background
        </h4>
        <p className='mb-8 leading-relaxed'>
          I'm a Software Engineer with a little over 3 years of experience who
          loves all things engineering and passionate ✨ about writing clean,
          future-proof code.
        </p>
        <p className='mb-8 leading-relaxed'>
          When I'm not helping Ula build their logistics charter for empowering
          small retailers in Indonesia, I'm coding, traveling or learning more
          about the world, One day at a time!
        </p>
      </div>
    </div>
  )
}

export default About
