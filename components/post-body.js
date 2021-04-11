export default function PostBody({ content }) {
  return (
    <div
      className='prose dark:prose-dark lg:prose-xl max-w-none'
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
