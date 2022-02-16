import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import DateComponent from '../components/date'

export default function PostCard({
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
      <h1 className='text-left mb-3 cursor-pointer text-lg lg:text-2xl leading-snug font-mono'>
        <Link href={`/post/${slug}`}>{title}</Link>
      </h1>
      <DateComponent dateString={moment(createdAt).format('MMM DD, YYYY')} />
      <p className='text-sm lg:text-md leading-relaxed mt-2 mb-2 line-clamp-2 lg:line-clamp-3 font-mono'>
        {excerpt}
      </p>
    </div>
  )
}
