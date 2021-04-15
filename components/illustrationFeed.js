import styles from './illustrationFeed.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import ProgressiveImage from './progressiveImage'

export default function illustrationFeed() {
  return(
    <div className={styles.feed}>
      <h1>Illustrator</h1>
      <div className={styles.feedIllustration}>
        <div className={styles.post}>
          <ProgressiveImage className={styles.img} src={'/illustration/learn_to_touch.png'}/>
        </div>
        {/* <div className={styles.post}>
          <Link href='/illustration/freeWord'>
            <a>
              <Image 
                src='/illustration/learn_to_touch.png'
                alt='FreeWord'
                width={300}
                height={300}
                layout='responsive'
                objectFit='cover'
                objectPosition='50% 0%'
              />
              {/* <ProgressiveImage src='/illustration/learn_to_touch.png'>
                {src => <img src={'/illustration/learn_to_touch.png'} alt='FreeWord' />}
              </ProgressiveImage> */}
            {/* </a>
          </Link>
        </div> */} 

        <div className={styles.post}>
          <Link href='/illustration/milesDavis'>
            <a>
              <Image 
                src='/illustration/miles_runs.png'
                alt='Miles Runs the Voodoo down'
                width={300}
                height={300}
                layout='responsive'
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
            src='/illustration/lpgd.png'
            alt='Labour Party Graphic Design'
            width={300}
            height={300}
            layout='responsive'
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
                src='/illustration/riot_wrap.png'
                alt='Riot Chicken'
                width={300}
                height={300}
                layout='responsive'
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
            layout='responsive'
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