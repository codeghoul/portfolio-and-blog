import Avatar from '../components/avatar'
import DateComponent from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <div className='mb-6 md:mb-14 sm:mx-0'>
        <CoverImage title={title} url={coverImage.url} />
      </div>
      <PostTitle>{title}</PostTitle>
      <div className='flex flex-row justify-between items-center mb-6'>
        {author && <Avatar name={author.name} picture={author.picture} />}
        <div className='text-xs lg:text-lg text-gray-600'>
          <DateComponent dateString={date} />
        </div>
      </div>
    </>
  )
}
