import siteMetadata from '../data/siteMetadata.json'
import SocialIcon from './social-icons'

export default function Footer() {
  console.log(siteMetadata)
  return (
    <footer className='flex flex-col items-center'>
      <div className='flex justify-center mb-3'>
        <span className='mr-4 ml-4'>
          <SocialIcon size={4} kind='github' href={siteMetadata.github} />
        </span>
        <span className='mr-4 ml-4'>
          <SocialIcon size={4} kind='mail' href={siteMetadata.email} />
        </span>
        <span className='mr-4 ml-4'>
          <SocialIcon size={4} kind='linkedin' href={siteMetadata.linkedin} />
        </span>
        <span className='mr-4 ml-4'>
          <SocialIcon size={4} kind='twitter' href={siteMetadata.twitter} />
        </span>
      </div>
      <p className='text-sm md:text-md dark:text-black font-mono tracking-tight text-center dark:bg-white w-full'>
        Made with ❤, 🧑🏻‍💻 and ☕ by Jayesh Patel
      </p>
    </footer>
  )
}
