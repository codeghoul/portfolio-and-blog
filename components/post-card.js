import Link from 'next/link'
import Image from 'next/image'
import DateComponent from './date'

export default function PostCard({
  post: { title, coverImage, date, excerpt, slug },
}) {
  const image = (
    <Image
      className='lg:h-full md:h-36 w-full object-cover object-center'
      src={coverImage.url}
      alt={`Cover Image for ${title}`}
      width={1200}
      height={630}
      layout='responsive'
    />
  )

  return (
    <div className='shadow-lg hover:shadow-xl border border-current'>
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
        <h3 className='text-lg lg:text-2xl mb-3 leading-snug font-mono'>
          <Link as={`/blogs/${slug}`} href='/blogs/[slug]'>
            <a className='hover:no-underline cursor-pointer'>{title}</a>
          </Link>
        </h3>
        <DateComponent dateString={date} />
        <p className='text-sm lg:text-md leading-relaxed mt-2 mb-2 line-clamp-2 lg:line-clamp-3 font-mono'>
          {excerpt}
        </p>
      </div>
    </div>
  )
}
