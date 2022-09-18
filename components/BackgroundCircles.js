import React from 'react'
import { motion } from 'framer-motion'

const BackgroundCircles = () => {
  return (
    <motion.div
      className='relative flex justify-center items-center'
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      }}
      transition={{
        duration: 2.5,
      }}
    >
      <div className='absolute border border-gray-200 dark:border-gray-700 rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
      <div className='absolute border border-gray-200 dark:border-gray-700 rounded-full h-[300px] w-[300px] mt-52' />
      <div className='absolute border border-gray-200 dark:border-gray-700 rounded-full h-[500px] w-[500px] mt-52' />
      <div className='absolute border border-blue-300 dark:border-blue-500 rounded-full h-[650px] w-[650px] mt-52 animate-pulse' />
      <div className='absolute border border-gray-200 dark:border-gray-700 rounded-full h-[800px] w-[800px] mt-52' />
    </motion.div>
  )
}

export default BackgroundCircles
