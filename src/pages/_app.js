import '../styles/index.css'
import '../styles/globals.scss'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
