import React from 'react'
import styles from './illustrationFeed.module.scss'
import Link from 'next/link'


export default class IllustrationFeed extends React.Component { 

render(){
    return(
      <div className={styles.contentWrapperLeft}>
        <h1 className={styles.title}>Illustrator</h1>
        <div className={styles.post}> 
          <h2>Free Word</h2>
          <Link href='illustration/freeWord'>
            <a>
              <img src='/illustration/freeword.jpg' alt='FreeWord' />
            </a>
          </Link>
          <div className={styles.hoverText}>
            <p>Season Identity for Free Word</p>
          </div>
        </div>

        <div className={styles.post}> 
          <h2>Miles Runs the Voodoo Down</h2>
          <Link href='illustration/milesDavis'>
            <a>
              <img src='/illustration/miles_runs.jpg' alt='Miles Runs the Voodoo Down' />
            </a>
          </Link>
          <div className={styles.hoverText}>
            <p>Vinyl Sleeve design for Secret 7"</p>
          </div>
        </div>

        <div className={styles.post}>
          <h2>Riot Chicken</h2>
          <Link href='illustration/riotChicken'>
            <a>
              <img src='/illustration/riot_wrap.jpg' alt='Riot Chicken' />
            </a>
          </Link>
          <div className={styles.hoverText}>
            <p>Menu Design for Riot Chicken</p>
          </div>
        </div>

        <div className={styles.post}>
          <h2>Labour Party Graphic Designers</h2>
          <Link href='illustration/labourPartyGraphicDesigners'>
              <a>
                <img src='/illustration/lpgd.jpg' alt='Labour Party Graphic Designers' loading='lazy' />
            </a>
          </Link>
          <div className={styles.hoverText}>
            <p>Poster design for LPGD's Artpack</p>
          </div>
        </div>

        <div className={styles.post}>
          <h2>NPLH</h2>
          <Link href='illustration/columbusCrew'>
              <a>
                <img src='/illustration/columbus_crew.jpg' alt='NPLH Columbus Crew' loading='lazy'/>
            </a>
          </Link>
          <div className={styles.hoverText}>
            <p>Editorial for NPLH on Columbus Crew's '#SaveTheCrew' campaign</p>
          </div>
        </div>

        <div className={styles.post}>
          <h2>In Looking Out</h2>
          <Link href='illustration/inLookingOut'>
              <a>
                <img src='/illustration/in_looking_out.jpg' alt='In Looking Out' loading='lazy' />
            </a>
          </Link>
          <div className={styles.hoverText}>
            <p>Illustration for In Looking Out about lockdown</p>
          </div>
        </div>

        <div className={styles.post}>
          <h2>Kitchen Island Commentators</h2>
          <Link href='illustration/kitchenIslandCommentators'>
              <a>
                <img src='/illustration/kitchen_island.jpg' alt='Kitchen Island Commentators' loading='lazy' />
            </a>
          </Link>
          <div className={styles.hoverText}>
            <p>Podcast Cover</p>
          </div>
        </div>
        
        <div className={styles.space} />
      </div>
    )
  }
}