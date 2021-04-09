import Document, { Html, Main, Head, NextScript } from 'next/document'
import Meta from '../components/meta'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <Meta />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
