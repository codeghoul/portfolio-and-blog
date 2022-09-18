import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [1, 2, 3, 4, 5]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full  flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project, i) => (
          <div
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
            key={i}
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src='https://img.freepik.com/free-psd/multi-device-responsive-mockup_106244-1609.jpg'
            />
            <div className='space-y-10 px-0 md:px-10 mx-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400'>
                  Case Study {i + 1} of {projects.length}
                </span>
                : UPS Clone
              </h4>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                cumque inventore modi odit recusandae, possimus ratione
                consectetur similique nulla minima error fuga nemo ab commodi!
                Mollitia blanditiis repudiandae consectetur voluptas.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-blue-300/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects
