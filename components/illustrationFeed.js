import styles from './illustrationFeed.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import ProgressiveImage from './progressiveImage'
import React from 'react'


export default class IllustrationFeed extends React.Component { 

render(){
    return(
      <div className={styles.feed}>
        <h1>Illustrator</h1>
        <div className={styles.feedIllustration}>
        {/* <div className={styles.post}>
            <Link href='/illustration/labourPartyGraphicDesigners'>
              <a>
                <ProgressiveImage 
                  className={styles.img} 
                  src={'/illustration/lpgd.png'}
                  overlaySrc={'/illustration/miles_runs.png'}  
                />
              </a>
            </Link>
          </div> */}

          <div className={styles.post}> 
            <Link href='illustration/freeWord'>
              <a>
                <Image 
                  src='/illustration/freeword.jpg'
                  alt='FreeWord'
                  width={300}
                  height={400}
                  loading='lazy'
                  objectFit='cover'
                  objectPosition='50% 0%'
                />
              </a>
            </Link>
          </div>

          <div className={styles.post}> 
            <Link href='illustration/milesDavis'>
              <a>
                <Image 
                  src='/illustration/miles_runs.jpg'
                  alt='FreeWord'
                  width={300}
                  height={400}
                  loading='lazy'
                  objectFit='cover'
                  objectPosition='50% 0%'
                />
              </a>
            </Link>
          </div>

          <div className={styles.post}>
            <Link href='illustration/riotChicken'>
              <a>
                <Image 
                  src='/illustration/riot_wrap.jpg'
                  alt='Riot Chicken'
                  width={300}
                  height={300}
                  loading='lazy'
                  objectFit='cover'
                  objectPosition='50% 0%'
                />
              </a>
            </Link>
          </div>

          <div className={styles.post}>
          <Link href='illustration/labourPartyGraphicDesigners'>
              <a>
            <Image 
              src='/illustration/columbus_crew.jpg'
              alt='NPLH Columbus Crew'
              width={280}
              height={300}
              loading='lazy'
              objectFit='cover'
              objectPosition='50% 0%'
            />
            </a>
          </Link>
          </div>

          <div className={styles.post}>
          <Link href='illustration/labourPartyGraphicDesigners'>
              <a>
            <Image 
              src='/illustration/in_looking_out.jpg'
              alt='In Looking Out'
              width={600}
              height={800}
              loading='lazy'
              layout='responsive'
              objectFit='cover'
              objectPosition='50% 0%'
            />
            </a>
          </Link>
          </div>

        </div>
      </div>
    )
  }
}