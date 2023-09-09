import siteMetadata from '../data/siteMetadata.json'
import Layout from '../components/Layout'
import { PageSeo } from '../components/SEO'
import Map from '../components/DynamicMap'
import { getAllTrips } from '../services'

export default function Trips({ preview = false, trips }) {
  const places = trips.flatMap((trip, index) => trip.places)

  return (
    <Layout preview={preview}>
      <PageSeo
        title={`Map`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/maps`}
      />
      <div className='lg:m-10 h-screen'>
        <Map places={places} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const trips = (await getAllTrips()) ?? []
  return {
    props: { trips },
  }
}
