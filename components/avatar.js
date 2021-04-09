export default function Avatar({ name, picture }) {
  return (
    <div className='flex items-center'>
      <img
        src={picture.url}
        className='w-8 h-8 lg:w-12 lg:h-12 rounded-full mr-4'
        alt={name}
      />
      <div className='text-sm lg:text-xl font-bold'>{name}</div>
    </div>
  )
}
