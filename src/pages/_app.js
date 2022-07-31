
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.min.js')
  })
  return (<>
    <Head>
      <meta charset="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans" />
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
