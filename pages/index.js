import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src="/logo.jpg" alt="Vercel Logo" />

    </div>
  )
}
