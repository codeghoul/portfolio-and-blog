export default function Date({ dateString }) {
  return (
    <time
      dateTime={dateString}
      className='text-xs leading-tight text-neutral-500 font-body'
    >
      {dateString}
    </time>
  )
}
