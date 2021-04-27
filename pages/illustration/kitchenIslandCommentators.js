import styles from './kitchenIslandCommentators.module.scss'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function milesDavis(){
  return(
    <Layout>
      <Head>
        <title>Charlie Fischer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.text}>
        <h1 className={styles.title}>
          Kitchen Island Commentators
        </h1>

        <p>
        A podcast cover for a podcast focusing on sports commentators.
        </p>

      </div>
      <div className={styles.images}>
        <div className={styles.mainImage}>
          <img src='/illustration/kitchenIsland/pocast_cover.jpg' alt="Kitchen Island Commentators" />
        </div>
      </div>
    </Layout>
  )
}