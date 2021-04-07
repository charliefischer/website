import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from './freeWord.module.css'
import Navbar from '../../components/navbar'


export default class FreeWord extends React.Component {
  render(){
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
          <Head>
            <title>Charlie Fischer</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar />

          <h1 className={styles.title}>
            Season Identity for Free Word
          </h1>

          <div className={styles.mainImage}>
            <Image
              src='/illustration/freeWord/banner.png'
              width={700}
              height={300}
              layout='responsive'
              objectFit='cover'
            />
          </div>

          <div className={styles.container}>
            <div className={styles.column}>
              <Image 
                src='/illustration/freeWord/kinder_justice.png'
                width={700}
                height={350}
                layout='responsive'
                objectFit='cover'
              />
              
              <Image 
                src='/illustration/freeWord/bouije_lanre.png'
                width={700}
                height={350}
                layout='responsive'
                objectFit='cover'
              />
            </div>
            <div className={styles.column}>
              <Image 
                src='/illustration/freeWord/green_new.png'
                width={700}
                height={350}
                layout='responsive'
                objectFit='cover'
              />
              <Image 
                src='/illustration/freeWord/tough_loving.png'
                width={700}
                height={350}
                layout='responsive'
                objectFit='cover'
              />
            </div>
          </div>

          <div className={styles.mainImage}>
            <Image
                src='/illustration/freeWord/windows.jpg'
                width={700}
                height={500}
                layout='responsive'
                objectFit='cover'
              />
          </div>

          <footer>
          </footer>
      </div>
    )
  }
}