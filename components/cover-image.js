import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({ title, url, slug }) {
  const image = (
    <img
      src={url}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small mx-auto', {
        'hover:shadow-medium transition-shadow duration-200 mx-auto': slug,
      })}
    />
  )
  return (
    <div className='sm:mx-0'>
      {slug ? (
        <Link as={`/blogs/${slug}`} href='/blogs/[slug]'>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
