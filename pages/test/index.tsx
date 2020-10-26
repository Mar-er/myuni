import Head from 'next/head'
import Link from 'next/link'
import cn from 'classnames'
import Layout from '../../components/Layout'
import styles from './index.module.scss'

export default function FirstPost() {
  const type: string = 'success'
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1
        className={cn({
          [styles.success]: type === 'success',
          [styles.error]: type === 'error'
        })}
      >First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}