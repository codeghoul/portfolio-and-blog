import React from 'react';

export default function PostBody({ content }) {
  return (
    <div
      className='prose prose-blue lg:prose-xl dark:text-white mx-auto max-w-none'
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
