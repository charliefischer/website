import styles from './illustrationFeed.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function illustrationFeed() {
  return(
    <div className={styles.feedIllustration}>
      <h1>
        Illustrator
      </h1>

      <div className={styles.post}>
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
          </a>
        </Link>
      </div>

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
        <Link href='illustration/riotChicken'>
           <a>
            <Image 
              src='/illustration/riot_wrap.jpg'
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
      
      <div className={styles.post}>
      <Link href='illustration/labourPartyGraphicDesigners'>
           <a>
        <Image 
          src='/illustration/lpgd.jpg'
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
    </div>
  )
}