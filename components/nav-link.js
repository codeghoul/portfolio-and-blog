import { useRouter } from 'next/router'
import Link from 'next/link'

export default function NavLink({ link: { name, href } }) {
  const router = useRouter()

  return (
    <Link href={href}>
      <a
        className={`p-1 tracking-widest font-medium text-sm lg:text-base text-gray-900 sm:p-4 dark:text-gray-100 ${
          router.asPath === href ? 'line-through' : ''
        }`}
      >
        {name}
      </a>
    </Link>
  )
}
