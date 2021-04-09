import styles from './labourPartyGraphicDesigners.module.css'
import Link from 'next/link'
import Navbar from '../../components/navbar'
import Head from 'next/head'
import Image from 'next/image'

export default function milesDavis(){
  return(
    <div>
      <Head>
        <title>Charlie Fischer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <h1 className={styles.title}>
        Miles Runs The Voodoo Down
      </h1>

      <div className={styles.mainImage}>
        <Image
          src='/illustration/lpgd/final_1.jpg'
          width={300}
          height={500}
          layout='responsive'
          objectFit='cover'
        />
      </div>
    </div>
  )
}