import Document, { Html, Main, Head, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Lato&family=Montserrat&family=Open+Sans&family=Roboto&family=Source+Sans+Pro&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='bg-white text-black dark:bg-black dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
