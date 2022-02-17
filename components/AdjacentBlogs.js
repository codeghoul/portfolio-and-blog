import React, { useState, useEffect } from 'react'

import AdjacentBlogCard from './AdjacentBlogCard'
import { getAdjacentBlogs } from '../services'

const AdjacentBlogs = ({ createdAt, slug }) => {
  const [adjacentBlog, setAdjacentBlog] = useState(null)
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    getAdjacentBlogs(createdAt, slug).then((result) => {
      setAdjacentBlog(result)
      setDataLoaded(true)
    })
  }, [slug])

  return (
    <div className='grid grid-cols-1 lg:grid-cols-8 gap-12 mb-8'>
      {dataLoaded && (
        <>
          {adjacentBlog.previous && (
            <div
              className={`${
                adjacentBlog.next
                  ? 'col-span-1 lg:col-span-4'
                  : 'col-span-1 lg:col-span-8'
              } adjacent-post rounded-lg relative h-72`}
            >
              <AdjacentBlogCard post={adjacentBlog.previous} position='LEFT' />
            </div>
          )}
          {adjacentBlog.next && (
            <div
              className={`${
                adjacentBlog.previous
                  ? 'col-span-1 lg:col-span-4'
                  : 'col-span-1 lg:col-span-8'
              } adjacent-post rounded-lg relative h-72`}
            >
              <AdjacentBlogCard post={adjacentBlog.next} position='RIGHT' />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default AdjacentBlogs
