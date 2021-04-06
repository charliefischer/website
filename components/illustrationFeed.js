import styles from './illustrationFeed.module.css'
import Image from 'next/image'

export default function illustrationFeed() {
  return(
    <div className={styles.feed}>
      <h1>
        Illustrator
      </h1>

      <div className={styles.post}>
        <Image 
        src='/illustration/learn_to_touch.png'
        alt='FreeWord'
        width={300}
        height={300}
        layout='responsive'
        objectFit='cover'
        objectPosition='50% 0%'
        />
      </div>

      <div className={styles.post}>
        <Image 
        src='/illustration/miles_runs.png'
        alt='Miles Runs the Voodoo down'
        width={300}
        height={300}
        layout='responsive'
        objectFit='cover'
        objectPosition='50% 0%'
        />
      </div>
      
      <div className={styles.post}>
        <Image 
        src='/illustration/riot_wrap.jpg'
        alt='Riot Chicken'
        width={300}
        height={300}
        layout='responsive'
        objectFit='cover'
        objectPosition='50% 0%'
        />
      </div>
      
      <div className={styles.post}>
        <Image 
        src='/illustration/lpgd.jpg'
        alt='Labour Party Graphic Design'
        width={300}
        height={300}
        layout='responsive'
        objectFit='cover'
        objectPosition='50% 0%'
        />
      </div>
    </div>
  )
}