import React from 'react'
import Head from 'next/head'
import styles from './freeWord.module.css'
import Layout from '../../components/layout'

export default class FreeWord extends React.Component {
  render(){
    return (
      <Layout>
      <div className={styles.frame}>
          <Head>
            <title>Charlie Fischer</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.text}>
            <h1 className={styles.title}>
              Season Identity for Free Word
            </h1>

            <p>
              For the Winter Season of Free Word I was wanted every character in the scenes to have a resemblence to the season.
              With the organisation hosting a huge number of events, I chose to create several characters to represent each event 
              that would all combine to create the packed busy crowd scenes. In total I created over 60 characters for the season 
              which were used for posters, social media icons, website banners, all the way up to 4m tall window displays. 
            </p>
          </div>
          <div className={styles.body}>
            <div className={styles.mainImage}>
              <img src='/illustration/freeWord/banner.png' alt='FreeWord Banner' />
            </div>

            <div className={styles.container}>
              <div className={styles.row}>
                <img src='/illustration/freeWord/kinder_justice.png' alt='FreeWord Kinder Justice' />
                <img src='/illustration/freeWord/bouije_lanre.png' alt='FreeWord Boujie Lanres Boulangerie' />
              </div>
              <div className={styles.row}>
                <img src='/illustration/freeWord/green_new.png' alt='FreeWord Green New Deal' />
                <img src='/illustration/freeWord/tough_loving.png' alt='FreeWord Tough Loving Care' />
              </div>
            </div>

            <div className={styles.mainImage}>
              <img src='/illustration/freeWord/windows.jpg' alt='FreeWord Window Display' />
            </div>

            <div className={styles.mainImage}>
              <img src='/illustration/freeWord/fishing.gif' alt='FreeWord Fishing Money Gif' />
            </div>

            <div className={styles.container}>
              <div className={styles.row}>
                <img src='/illustration/freeWord/audio-b.png' alt='FreeWord Audio Media Banner' />
                <img src='/illustration/freeWord/podcast-b.png' alt='FreeWord Podcase Media Banner' />
              </div>
              <div className={styles.row}>
                <img src='/illustration/freeWord/video-b.png' alt='FreeWord Video Media Banner' />
                <img src='/illustration/freeWord/blog-b.png' alt='FreeWord Blog Media Banner' />
              </div>
            </div>

            <div className={styles.container}>
              <div className={styles.row}>
                  <img className={styles.poster} src='/illustration/freeWord/title_card.png' alt='FreeWord Title Card' loading='lazy' />
                  <img className={styles.poster} src='/illustration/freeWord/poster.png' alt='FreeWord Poster Design' loading='lazy' />
              </div>
            </div>

            <div className={styles.mainImage}>
              <img src='/illustration/freeWord/hospitality.gif' alt='FreeWord Hospitality Gif' loading='lazy' />
            </div>
          </div>
      </div>
      </Layout>
    )
  }
}