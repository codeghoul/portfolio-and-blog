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
      <div className='lg:h-224 h-128 p-2 shadow-lg md:p-8 mb-8 hover:shadow-xl border border-current'>
        <Map places={places} />
      </div>
      <div className='p-6 text-center'>
        <p className='text-xl font-bold mb-2'>
          "No random actions, none not based on underlying principles."
        </p>
        <p className='text-gray-600'>- Marcus Aurelius</p>
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
