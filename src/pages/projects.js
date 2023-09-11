import siteMetadata from '../data/siteMetadata.json'
import SocialIcon from '../components/social-icons'
import Layout from '../components/Layout'
import { PageSeo } from '../components/SEO'
import ProjectCard from '../components/ProjectCard'
import { getAllProjects } from '../services'

export default function Projects({ preview = false, projects }) {
  return (
    <Layout preview={preview}>
      <PageSeo
        title={`Projects `}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/projects`}
      />
      <div className='lg:p-10 lg:m-10 mt-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6'>
          {projects.map((project) => (
            <div key={project.name}>
              <ProjectCard project={project} />
            </div>
          ))}
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
