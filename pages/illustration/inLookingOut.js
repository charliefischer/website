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
          <p>
            My desk faces out the front of my house so I've taken quite a love for neighbourhood watch. 
            Although I can see everyone is just sat in their front rooms watching TV all day, I 
            like to imagine what the weirdest scenario I could spot through someones window 
            if they think no one is watching. Re-enacting the Patrick Swayze Ghost scene with 
            their teddy bear? Maybe.
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