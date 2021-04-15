import styles from './columbusCrew.module.scss'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function milesDavis(){
  return(
    <Layout>
      <div className={styles.frame}>
        <Head>
          <title>Charlie Fischer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.text}>
          <h1 className={styles.title}>
            NPLH Columbus Crew
          </h1>

          <p>
            An illustration showing the various protests around the Save The Crew movement. The movement was from fans of 
            the MLS side Columbus Crew as their owners tried to move the franchise to Austin, Texas.
          </p>
        </div>
      <div className={styles.body}>
      <div className={styles.mainImage}>
        <img src='/illustration/columbusCrew/Columbus_crew.jpg' alt="Columbus Crew NPLH" />
      </div>
    </div>
    </div>
    </Layout>
  )
}