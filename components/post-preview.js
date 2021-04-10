import Link from 'next/link'
import DateComponent from '../components/date'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  const image = (
    <img
      className='lg:h-full md:h-36 w-full object-cover object-center rounded-lg rounded-b-none'
      src={coverImage.url}
      alt={`Cover Image for ${title}`}
    />
  )

  return (
    <div className='shadow-lg hover:shadow-xl rounded-lg dark:bg-gray-800'>
      <div className='mb-5'>
        {slug ? (
          <Link as={`/blogs/${slug}`} href='/blogs/[slug]'>
            <a aria-label={title}>{image}</a>
          </Link>
        ) : (
          image
        )}
      </div>
      <div className='p-5'>
        <h3 className='text-xl lg:text-3xl mb-3 leading-snug'>
          <Link as={`/blogs/${slug}`} href='/blogs/[slug]'>
            <a className='hover:underline'>{title}</a>
          </Link>
        </h3>
        <div className='text-gray-600 text:sm lg:text-lg mb-4 dark:text-gray-400'>
          <DateComponent dateString={date} />
        </div>
        <p className='text-md lg:text-lg leading-relaxed mb-4 line-clamp-2 lg:line-clamp-3'>
          {excerpt}
        </p>
      </div>
    </div>
  )
}
