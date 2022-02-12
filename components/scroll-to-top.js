import React, { useEffect, useState } from 'react'

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
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='cursor-pointer block w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 outline-none animate-bounce'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          onClick={scrollToTop}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z'
          />
        </svg>
      )}
    </div>
  )
}
