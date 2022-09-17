import React, { useEffect, useState } from 'react'
// import { HiChevronDoubleUp } from 'react-icons/hi'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [isVisible])

  return (
    <div className='fixed bottom-2 right-2 md:bottom-5 md:right-5 z-50'>
      {isVisible && (
        <HiChevronDoubleUp
          className='cursor-pointer block w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 outline-none animate-bounce'
          onClick={scrollToTop}
        ></HiChevronDoubleUp>
      )}
    </div>
  )
}
