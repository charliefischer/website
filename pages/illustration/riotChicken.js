import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from './riotChicken.module.css'
import Navbar from '../../components/navbar'


export default class RiotChicken extends React.Component {
  render(){
    return (
      <div>
          <Head>
            <title>Charlie Fischer</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar />

          <h1 className={styles.title}>
            Riot Chicken Menu Design
          </h1>

          <div className={styles.mainImage}>
            <Image
              src='/illustration/riotChicken/menu_website.png'
              width={400}
              height={500}
              layout='responsive'
              objectFit='cover'
            />
          </div>
      </div>
    )
  }
}