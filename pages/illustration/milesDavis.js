import styles from './milesDavis.module.css'
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
            Miles Runs the Voodoo Down
          </h1>

          <p>
            My entry to secret 7" - design a vinyl sleeve to illustrate the song Miles Runs the Voodoo Down by Miles Davis.
            I wanted to capture the movement and busyness of the song whilst capturing the feeling of how busy the stage must've 
            been with Miles' band featuring so many people. 
          </p>
        </div>
      <div className={styles.body}>
      <div className={styles.mainImage}>
        <img src='/illustration/milesDavis/png.png' alt="Miles Runs the Voodoo Down" />
      </div>
    </div>
    </div>
    </Layout>
  )
}