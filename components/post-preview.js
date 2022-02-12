import Link from 'next/link'
import Image from 'next/image'
import DateComponent from '../components/date'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
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
        <h3 className='text-xl lg:text-3xl mb-3 leading-snug'>
          <Link as={`/blogs/${slug}`} href='/blogs/[slug]'>
            <a className='hover:no-underline cursor-pointer'>{title}</a>
          </Link>
        </h3>
        <DateComponent dateString={date} />
        <p className='text-md lg:text-lg leading-relaxed mt-2 mb-2 line-clamp-2 lg:line-clamp-3'>
          {excerpt}
        </p>
      </div>
    </div>
  )
}
