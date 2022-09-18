import React from 'react'
import { motion } from 'framer-motion'

const ExperienceCard = () => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 ove'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://lh3.googleusercontent.com/a-/AFdZucrQh8ghLmSjt5hchWxr-2ujbAnx3fXL09_MwKYDfw=s576-p-rw-no'
        alt='company logo'
      ></motion.img>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Senior Software Engineer at Ula</h4>
        <p className='font-bold text-2xl mt-1'>Ula</p>
        <div className='flex space-x-2 my-2'>
          <img
            className='h-10 w-10 rounded-full'
            src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png'
            alt='Tech'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png'
            alt='Tech'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png'
            alt='Tech'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png'
            alt='Tech'
          />
        </div>
        <p className='uppercase py-5 text-gray-300'>Started Work... - Ended</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>
            Summary Points Summary Points Summary Points Summary Points Summary
            Points Summary Points Summary Points
          </li>
          <li>
            Summary Points Summary Points Summary Points Summary Points Summary
            Points Summary Points Summary Points
          </li>
          <li>
            Summary Points Summary Points Summary Points Summary Points Summary
            Points Summary Points Summary Points
          </li>
          <li>
            Summary Points Summary Points Summary Points Summary Points Summary
            Points Summary Points Summary Points
          </li>
          <li>
            Summary Points Summary Points Summary Points Summary Points Summary
            Points Summary Points Summary Points
          </li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
