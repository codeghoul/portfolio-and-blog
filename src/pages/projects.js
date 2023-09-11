import siteMetadata from '../data/siteMetadata.json'
import SocialIcon from '../components/social-icons'
import Layout from '../components/Layout'
import { PageSeo } from '../components/SEO'
import { getAllProjects } from '../services'

export default function Projects({ preview = false, projects }) {
  return (
    <Layout preview={preview}>
      <PageSeo
        title={`Projects `}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/projects`}
      />
      <div className='lg:p-10 lg:m-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6'>
          {projects.map((project) => {
            return (
              <div key={project.name}>
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
                    <div className='flex flex-row flex-wrap mt-4 mb-4'>
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
                    <div className='flex flex-row justify-between'>
                      {project.sourceCode && (
                        <SocialIcon
                          href={project.github}
                          kind='github'
                          size={6}
                        />
                      )}
                      {project.demo && (
                        <SocialIcon
                          href={project.website}
                          kind='external'
                          size={6}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const projects = (await getAllProjects()) ?? []
  return {
    props: { projects },
  }
}
