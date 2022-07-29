
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.min.js')
  })
  return (<>
    <Component {...pageProps} />
  </>)
}

export default MyApp
