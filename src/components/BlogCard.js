import Link from 'next/link'
import moment from 'moment'
import Date from './Date'

export default function BlogCard({
  post: { title, createdAt, excerpt, slug, tags },
}) {
  return (
    <div className='mt-8 py-4 lg:mt-0 lg:py-8 px-10 lg:my-0 md:my-8 flex-col justify-start items-start gap-3 inline-flex'>
      <Date dateString={moment(createdAt).format('MMM DD, YYYY')} />
      <h1 className='text-left text-neutral-900 dark:text-neutral-100 cursor-pointer text-lg lg:text-2xl leading-snug font-display'>
        <Link href={`/blogs/${slug}`}>
          <a className='hover:no-underline cursor-pointer'>{title}</a>
        </Link>
      </h1>
      <p className='text-xs lg:text-sm text-neutral-900 dark:text-neutral-100 leading-relaxed line-clamp-2 lg:line-clamp-3 font-body'>
        {excerpt}
      </p>
      <div className='flex justify-evenly items-center gap-2'>
        {tags.map((tag) => (
          <p
            key={tag}
            className='bg-gradient-to-br dark:from-gray-100 dark:to-neutral-900 from-orange-300 to-green-100 text-neutral-900 text-xs lg:text-sm font-display rounded-full py-1 px-3'
          >
            {tag}
          </p>
        ))}
      </div>
      <hr className='h-[1px] w-full mt-4 border-neutral-900 bg-neutral-900ls dark:border-neutral-500 dark:bg-neutral-500'></hr>
    </div>
  )
}
