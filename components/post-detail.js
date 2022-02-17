import React from 'react'

import Image from 'next/image'
import DateComponent from './date'
import moment from 'moment'

import PostBody from './post-body'

const PostDetail = ({ post }) => {
  const image = (
    <Image
      className='object-top absolute h-80 w-full object-cover shadow-lg'
      src={post.coverImage.url}
      alt={`Cover Image for ${post.title}`}
      width={post.coverImage.width}
      height={post.coverImage.height}
      layout='fill'
    />
  )

  return (
    <article className='lg:p-8 pb-12 mb-8 shadow-lg border border-current'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        {image}
      </div>
      <div className='px-4 lg:px-0'>
        <div className='flex items-center mb-8'>
          <DateComponent
            dateString={moment(post.createdAt).format('MMM DD, YYYY')}
          />
        </div>
      </div>
      <h1 className='text-left mb-3 cursor-pointer text-lg lg:text-2xl leading-snug font-mono'>{post.title}</h1>
      <PostBody content={post.content.html} />
    </article>
  )
}

PostDetail.propTypes = {}

export default PostDetail
