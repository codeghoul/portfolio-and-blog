import React from 'react'
import Image from 'next/image'
import Date from './Date'
import moment from 'moment'

const BlogDetail = ({ post }) => {
  const renderContentFragment = (index, text, obj, type) => {
    let modifiedText = text

    if (obj) {
      if (obj.bold) {
        modifiedText = <strong key={`${index}-${type}`}>{modifiedText}</strong>
      }

      if (obj.italic) {
        modifiedText = <em key={`${index}-${type}`}>{modifiedText}</em>
      }

      if (obj.underline) {
        modifiedText = <u key={`${index}-${type}`}>{modifiedText}</u>
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3 key={`${index}-${type}`} className='text-xl font-semibold mb-4'>
            {modifiedText}
          </h3>
        )
      case 'paragraph':
        return (
          <p
            key={`${index}-${type}`}
            className='mb-4 text-gray-800 dark:text-gray-200'
          >
            {modifiedText}
          </p>
        )
      case 'heading-four':
        return (
          <h4 key={`${index}-${type}`} className='text-md font-semibold mb-4'>
            {modifiedText}
          </h4>
        )
      case 'image':
        return (
          <div className='relative w-full' key={`${index}-${type}`}>
            <Image
              className='object-cover w-full h-[auto] md:h-auto'
              alt={obj.title}
              src={obj.src}
              width={obj.width}
              height={obj.height}
            />
          </div>
        )
      default:
        return <span key={`${index}-${type}`}>{modifiedText}</span>
    }
  }

  const image = (
    <Image
      className='object-center w-full object-cover shadow-lg'
      src={post.coverImage.url}
      alt={`Cover Image for ${post.title}`}
      layout='responsive'
      width={1280}
      height={720}
      key={`cover-image-${post.id}`}
    />
  )

  return (
    <article className='p-4 md:p-8 pb-12 mb-8 shadow-lg border border-current bg-white dark:bg-gray-800'>
      <div className='relative overflow-hidden shadow-md mb-6'>{image}</div>
      <div className='mb-8'>
        <Date dateString={moment(post.createdAt).format('MMM DD, YYYY')} />
      </div>
      <h1 className='text-2xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100'>
        {post.title}
      </h1>
      {post.content.raw.children.map((typeObj, index) => {
        const children = typeObj.children.map((item, childIndex) =>
          renderContentFragment(
            index * typeObj.children.length + childIndex,
            item.text,
            item,
            typeObj.type
          )
        )
        return renderContentFragment(index, children, typeObj, typeObj.type)
      })}
    </article>
  )
}

export default BlogDetail
