import styles from './inLookingOut.module.scss'
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
            In Looking Out
          </h1>

          <p>
            At the beginning of the first pandemic myself and illustrator Dide Tengiz created an online gallery where
            artists sent in their illustrations and soundscapes to present their feelings in the COVID lockdowns. The final site
            I created can be seen  <a href='http://www.inlookingout.co.uk/' target='_blank'>here</a>
          </p>
        </div>
      <div className={styles.body}>
      <div className={styles.mainImage}>
        <img src='/illustration/inLookingOut/in_looking_out_full.jpg' alt="In Looking Out" />
      </div>
    </div>
    </div>
    </Layout>
  )
}