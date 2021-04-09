export default function PostBody({ content }) {
  return (
    <div className='w-11/12 md:w-8/12 mx-auto'>
      <div
        className='prose lg:prose-xl max-w-none'
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
