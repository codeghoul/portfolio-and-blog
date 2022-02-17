export default function Date({ dateString }) {
  return (
    <time
      dateTime={dateString}
      className='text-xs leading-tight text-gray-500 font-mono'
    >
      {dateString}
    </time>
  )
}
