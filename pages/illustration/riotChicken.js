import React from 'react'
import Head from 'next/head'
import styles from './riotChicken.module.scss'
import Layout from '../../components/layout'


export default class RiotChicken extends React.Component {
  render(){
    return (
      <Layout>
        <Head>
          <title>Charlie Fischer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.text}>
          <h1 className={styles.title}>
            Riot Chicken
          </h1>
          <p>
            For the redesign of Riot Chicken's menu I wanted to capture and exaggerate the theme of Riot but in a playful, 
            chicken shop related way. The menu featured a huge number of items which gave me a full a3 page to work with and 
            hide lots of little details. 
          </p>
        </div>
        <div className={styles.images}>
          <div className={styles.mainImage}>
            <img src='/illustration/riotChicken/menu_website.jpg' alt='Riot Chicken Menu Design' />
          </div>
        </div>
      </Layout>
    )
  }
}