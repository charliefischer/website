import styles from './illustrationFeed.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import ProgressiveImage from './progressiveImage'

export default function illustrationFeed() {
  return(
    <div className={styles.feed}>
      <h1>Illustrator</h1>
      <p> updated </p>
      <div className={styles.feedIllustration}>
      <div className={styles.post}>
        <img data-src='/illustration/lpgd.png' /> 
      </div>
      <div className={styles.post}>
          <Link href='/illustration/labourPartyGraphicDesigners'>
            <a>
              <ProgressiveImage 
                className={styles.img} 
                src={'/illustration/lpgd.png'}
                overlaySrc={'/illustration/miles_runs.png'}  
              />
            </a>
          </Link>
        </div>

        <div className={styles.post}>
          <Link href='/illustration/freeWord'>
            <a>
              <ProgressiveImage className={styles.img} src={'/illustration/learn_to_touch.png'}/>
            </a>
          </Link>
        </div>
        
        <div className={styles.post}>
          <Link href='/illustration/milesDavis'>
            <a>
              <ProgressiveImage className={styles.img} src={'/illustration/miles_runs.png'}/>
            </a>
          </Link>
        </div>
       
        <div className={styles.post}>
          <Link href='/illustration/labourPartyGraphicDesigners'>
            <a>
              <ProgressiveImage 
                className={styles.img} 
                src={'/illustration/lpgd.png'}
                overlaySrc={'/illustration/miles_runs.png'}  
              />
            </a>
          </Link>
        </div>

        <div className={styles.post}>
          <Link href='illustration/riotChicken'>
            <a>
              <Image 
                src='/illustration/riot_wrap.png'
                alt='Riot Chicken'
                width={300}
                height={300}
                objectFit='cover'
                objectPosition='50% 0%'
              />
            </a>
          </Link>
        </div>

        <div className={styles.postLarge}>
        <Link href='illustration/labourPartyGraphicDesigners'>
            <a>
          <Image 
            src='/illustration/columbus_crew.png'
            alt='NPLH Columbus Crew'
            width={280}
            height={300}
            objectFit='cover'
            objectPosition='50% 0%'
          />
          </a>
        </Link>
        </div>

        <div className={styles.postLarge}>
        <Link href='illustration/labourPartyGraphicDesigners'>
            <a>
          <Image 
            src='/illustration/in_looking_out.png'
            alt='In Looking Out'
            width={300}
            height={300}
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