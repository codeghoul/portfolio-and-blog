import Head from 'next/head'
import { SEO as siteData } from './SEO'

export default function Meta() {
  return (
    <Head>
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicon/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon/favicon-16x16.png'
      />
      <link rel='manifest' href='/favicon/site.webmanifest' />
      <link
        rel='mask-icon'
        href='/favicon/safari-pinned-tab.svg'
        color='#000000'
      />
      <link rel='shortcut icon' href='/favicon/favicon.ico' />
      <link rel='alternate' type='application/rss+xml' href='/feed.xml' />

      <meta name='msapplication-TileColor' content='#000000' />
      <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
      <meta name='theme-color' content='#000' />
      <meta charSet='utf-8' />
      <meta name='robots' content='index, follow' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta
        name='keywords'
        content='jayesh, patel, backend, developer, research, engineer, distributed, systems, development'
      />
      <meta name='author' content={siteData.author} />
      <meta name='theme-color' content='#000000' />
      <meta property='og:type' content='website' />
    </Head>
  )
}
