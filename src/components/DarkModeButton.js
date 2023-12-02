import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function DarkModeButton() {
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }
  }

  return (
    <button
      aria-label={`Toggle ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
      type='button'
      className='w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full focus:outline-none transition'
      onClick={switchTheme}
    >
      {isMounted && (theme === 'dark' ? <FaSun /> : <FaMoon />)}
    </button>
  )
}
