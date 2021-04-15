import React from 'react'
import styles from './illustrationFeed.module.scss'
import Link from 'next/link'


export default class IllustrationFeed extends React.Component { 

render(){
    return(
      <div className={styles.feed}>
        <h1>Illustrator</h1>
        <div className={styles.feedIllustration}>
          <div className={styles.post}> 
            <Link href='illustration/freeWord'>
              <a>
                <img src='/illustration/freeword.jpg' alt='FreeWord' />
              </a>
            </Link>
          </div>

          <div className={styles.post}> 
            <Link href='illustration/milesDavis'>
              <a>
                <img src='/illustration/miles_runs.jpg' alt='Miles Runs the Voodoo Down' />
              </a>
            </Link>
          </div>

          <div className={styles.post}>
            <Link href='illustration/riotChicken'>
              <a>
                <img src='/illustration/riot_wrap.jpg' alt='Riot Chicken' />
              </a>
            </Link>
          </div>

          <div className={styles.post}>
          <Link href='illustration/labourPartyGraphicDesigners'>
              <a>
                <img src='/illustration/lpgd.jpg' alt='Labour Party Graphic Designers' loading='lazy' />
            </a>
          </Link>
          </div>

          <div className={styles.post}>
          <Link href='illustration/columbusCrew'>
              <a>
                <img src='/illustration/columbus_crew.jpg' alt='NPLH Columbus Crew' />
            </a>
          </Link>
          </div>

          <div className={styles.post}>
          <Link href='illustration/inLookingOut'>
              <a>
                <img src='/illustration/in_looking_out.jpg' alt='In Looking Out' loading='lazy' />
            </a>
          </Link>
          </div>

        </div>
      </div>
    )
  }
}