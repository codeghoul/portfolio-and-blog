import siteMetadata from '../data/siteMetadata.json'
import SocialIcon from './social-icons'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='flex flex-col items-center mt-10'>
      <div className='flex items-center space-x-4'>
        <span className='mx-2'>
          <SocialIcon size={4} kind='github' href={siteMetadata.github} />
        </span>
        <span className='mx-2'>
          <SocialIcon size={4} kind='mail' href={siteMetadata.email} />
        </span>
        <span className='mx-2'>
          <SocialIcon size={4} kind='linkedin' href={siteMetadata.linkedin} />
        </span>
        <span className='mx-2'>
          <SocialIcon size={4} kind='twitter' href={siteMetadata.twitter} />
        </span>
      </div>
      <div className='my-3'>
        <hr className='border-gray-300 dark:border-white w-16' />
      </div>
      <p className='text-xs mb-2 dark:text-gray-600 font-mono text-center w-full'>
        © {currentYear} Jayesh Patel
      </p>
    </footer>
  )
}
