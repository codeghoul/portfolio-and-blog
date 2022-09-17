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
      aria-label='Toggle Dark Mode'
      type='button'
      className='mr-4 ml-4'
      onClick={switchTheme}
    >
      {isMounted && (theme === 'dark' ? <FaSun /> : <FaMoon />)}
    </button>
  )
}
