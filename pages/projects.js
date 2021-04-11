import siteMetadata from '../data/siteMetadata.json'
import SocialIcon from '../components/social-icons'
import Layout from '../components/layout'
import { PageSeo } from '../components/seo'
import { getAllProjects } from '../lib/api'

export default function Projects({ preview, projects }) {
  return (
    <Layout preview={preview}>
      <PageSeo
        title={`Projects `}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/projects`}
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6'>
        {projects.map((project) => {
          return (
            <div key={project.name}>
              <div className='p-5 shadow-lg hover:shadow-xl h-full border border-current'>
                <h3 className='text-lg lg:text-xl mb-3 leading-snug'>
                  {project.name}
                </h3>
                <p className='text-sm lg:text-md leading-relaxed mb-4'>
                  {project.description}
                </p>
                <div className='flex flex-row justify-between my-2'>
                  {project.github && (
                    <SocialIcon href={project.github} kind='github' size={6} />
                  )}
                  {project.website && (
                    <SocialIcon
                      href={project.website}
                      kind='external'
                      size={6}
                    />
                  )}
                </div>
                <div className='flex flex-row flex-wrap'>
                  {project.tags &&
                    project.tags.split(', ').map((tag) => (
                      <p
                        className='text-sm mr-2 text-gray-600 dark:text-gray-300 leading-tight'
                        key={tag}
                      >
                        #{tag}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const projects = (await getAllProjects(preview)) ?? []
  return {
    props: { preview, projects },
  }
}
