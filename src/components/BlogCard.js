import Link from 'next/link'
import moment from 'moment'
import Date from './Date'

export default function BlogCard({
  post: { title, createdAt, excerpt, slug, tags },
}) {
  return (
    <div className='py-8 px-10 lg:my-0 md:my-8 border-b border-dotted border-neutral-100 flex-col justify-start items-start gap-3 inline-flex'>
      <Date dateString={moment(createdAt).format('MMM DD, YYYY')} />
      <h1 className='text-left text-neutral-100 cursor-pointer text-lg lg:text-2xl leading-snug font-display'>
        <Link href={`/blogs/${slug}`}>
          <a className='hover:no-underline cursor-pointer'>{title}</a>
        </Link>
      </h1>
      <p className='text-xs lg:text-sm text-neutral-100 leading-relaxed line-clamp-2 lg:line-clamp-3 font-body'>
        {excerpt}
      </p>
      <div className='flex justify-evenly items-center gap-2'>
        {tags.map((tag) => (
          <p className='bg-gradient-to-br from-gray-100 to-neutral-900 text-neutral-900 text-xs lg:text-sm font-display rounded-full py-1 px-3'>
            {tag}
          </p>
        ))}
      </div>
    </div>
  )
}
