import { FaGithub as Github } from 'react-icons/fa'
import { FaExternalLinkAlt as External } from 'react-icons/fa'

// Icons taken from: https://simpleicons.org/

const components = {
  github: Github,
  external: External,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href) return null

  const SocialSvg = components[kind]

  return (
    <a
      className='text-sm text-gray-500 transition hover:text-gray-600'
      target='_blank'
      rel='noopener noreferrer'
      href={href}
    >
      <span className='sr-only'>{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
