import { useRouter } from 'next/router'
import Link from 'next/link'

export default function NavLink({ link: { name, href } }) {
  const router = useRouter()

  return (
    <Link href={href}>
      <a
        className={`m-1 tracking-widest font-medium text-sm lg:text-display text-gray-900 sm:ml-4 dark:text-gray-100 ${
          router.asPath === href ? 'line-through' : ''
        }`}
      >
        {name}
      </a>
    </Link>
  )
}
