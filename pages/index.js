import Head from 'next/head'
import IllustrationFeed from '../components/illustrationFeed'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import WebDevFeed from '../components/webdevFeed'

export default function Home() {
  return (
    <Layout>
        <Head>
          <title>Charlie Fischer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

          <Navbar />
          <IllustrationFeed />
          <WebDevFeed />

        <footer>
        </footer>
    </Layout>
  )
}
