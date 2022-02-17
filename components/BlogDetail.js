import React from 'react'

import Image from 'next/image'
import Date from './Date'
import moment from 'moment'

const BlogDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3 key={index} className='text-xl font-semibold mb-4'>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        )
      case 'paragraph':
        return (
          <p key={index} className='mb-8'>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        )
      case 'heading-four':
        return (
          <h4 key={index} className='text-md font-semibold mb-4'>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        )
      case 'image':
        return (
          <Image
            className='mx-auto'
            key={index}
            alt={obj.title}
            src={obj.src}
            width={obj.width}
            height={obj.height}
          />
        )
      default:
        return modifiedText
    }
  }

  const image = (
    <Image
      className='object-center absolute h-80 w-full object-cover shadow-lg'
      src={post.coverImage.url}
      alt={`Cover Image for ${post.title}`}
      width={post.coverImage.width}
      height={post.coverImage.height}
    />
  )

  return (
    <article className='p-2 md:p-8 pb-12 mb-8 shadow-lg border border-current'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        {image}
      </div>
      <div className='mb-8'>
        <Date dateString={moment(post.createdAt).format('MMM DD, YYYY')} />
      </div>
      <h1 className='text-left mb-3 cursor-pointer text-lg lg:text-2xl leading-snug font-mono'>
        {post.title}
      </h1>
      {post.content.raw.children.map((typeObj, index) => {
        const children = typeObj.children.map((item, itemindex) =>
          getContentFragment(itemindex, item.text, item)
        )
        return getContentFragment(index, children, typeObj, typeObj.type)
      })}
    </article>
  )
}

export default BlogDetail
