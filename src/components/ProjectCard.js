import SocialIcon from '../components/social-icons'

export default function ProjectCard({ project }) {
  return (
    <div className='p-5 shadow-lg hover:shadow-xl h-full border border-current flex flex-col justify-between'>
      <div>
        <h3 className='text-lg lg:text-xl mb-3 leading-snug font-mono'>
          {project.name}
        </h3>
        <p className='text-sm lg:text-md leading-relaxed mb-4 font-mono'>
          {project.description}
        </p>
      </div>
      <div>
        <div className='flex flex-row justify-between'>
          {project.sourceCode && (
            <SocialIcon kind='github' href={project.sourceCode} size={4} />
          )}
          {project.demo && (
            <SocialIcon kind='external' href={project.demo} size={4} />
          )}
        </div>
        <div className='flex flex-row flex-wrap mt-4'>
          {project.tags &&
            project.tags.map((tag) => (
              <p
                className='text-sm mr-2 text-gray-600 dark:text-gray-300 leading-tight font-extralight'
                key={tag}
              >
                #{tag}
              </p>
            ))}
        </div>
      </div>
    </div>
  )
}
