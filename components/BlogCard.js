import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import Date from './date'

export default function BlogCard({
  post: { title, coverImage, createdAt, excerpt, slug, authors },
}) {
  const image = (
    <Image
      className='object-top absolute h-80 w-full object-cover shadow-lg'
      src={coverImage.url}
      alt={`Cover Image for ${title}`}
      width={coverImage.width}
      height={coverImage.height}
      layout='fill'
    />
  )

  return (
    <div className='shadow-lg p-0 lg:p-8 pb-12 mb-8 hover:shadow-xl border border-current'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        {image}
      </div>
      <div className='p-2 lg:p-0'>
        <h1 className='text-left mb-3 cursor-pointer text-lg lg:text-2xl leading-snug font-mono'>
          <Link href={`/blogs/${slug}`}>
            <a className='hover:no-underline cursor-pointer'>{title}</a>
          </Link>
        </h1>
        <Date dateString={moment(createdAt).format('MMM DD, YYYY')} />
        <p className='text-sm lg:text-md leading-relaxed mt-2 lg:mb-2 line-clamp-2 lg:line-clamp-3 font-mono'>
          {excerpt}
        </p>
      </div>
    </div>
  )
}
