import { AppProps } from 'next/app'

import '../styles/rest.scss'
import '../styles/globals.scss'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
