import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts } from '../services'
import DateComponent from './date'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      )
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result))
    }
  }, [])

  return (
    <div className='shadow-lg p-8 mb-8 hover:shadow-xl border border-current'>
      <h1 className='text-xl mb-8 border-b pb-4'>
        {slug ? 'Related Blogs' : 'Recent Blogs'}
      </h1>
      {relatedPosts.map((post) => (
        <div key={post.title} className='flex items-center'>
          <div className='w-16 flex-none'>
            <img
              alt={post.title}
              className='align-middle'
              src={post.coverImage.url}
            />
          </div>
          <div className='flex flex-col flex-grow ml-4 p-2'>
            <Link href={`/blogs/${post.slug}`} key={post.title}>
              <a className='hover:no-underline cursor-pointer text-md'>
                {post.title}
              </a>
            </Link>
            <DateComponent
              dateString={moment(post.createdBy).format('MMM DD, YYYY')}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
