import Image from 'next/image'

export default function Avatar({ name, picture }) {
  return (
    <div className='flex items-center'>
      <div className='w-8 h-8 lg:w-12 lg:h-12 rounded-full mr-2 md:mr-4'>
        <Image src={picture.url} alt={name} width={48} height={48} />
      </div>
      <div className='text-sm lg:text-xl font-bold'>{name}</div>
    </div>
  )
}
