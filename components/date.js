import { format } from 'date-fns'

export default function DateComponent({ dateString }) {
  return (
    <time dateTime={dateString} className='text-sm leading-tight text-gray-500'>
      {format(new Date(dateString), 'LLLL	d, yyyy')}
    </time>
  )
}
