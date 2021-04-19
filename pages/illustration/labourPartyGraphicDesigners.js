import styles from './labourPartyGraphicDesigners.module.scss'
import Layout from '../../components/layout'
import Head from 'next/head'

export default function milesDavis(){
  return(
    <Layout>
      <Head>
        <title>Charlie Fischer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.text}>
        <h1 className={styles.title}>
          Labour Party Graphic Designers
        </h1>

        <p>
          For the LPGD artpacks looking at the theme of how low skilled workers became heroes during the pandemic.
        </p>
      </div>
      <div className={styles.images}>
        <div className={styles.mainImage}>
          <img src='/illustration/lpgd/final_1.jpg' alt='Labour Party Graphic Designers' />
        </div>
      </div>
    </Layout>
  )
}