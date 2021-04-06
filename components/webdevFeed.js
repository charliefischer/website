import styles from './webdevFeed.module.css'
import Image from 'next/image'


export default function webdevFeed() {
  return(
    <div className={styles.feed}>
      <div className={styles.post}>
        <Image 
        src='/web/type_checker.png'
        alt='Type Checker'
        width={300}
        height={200}
        layout='responsive'
        objectFit='cover'
        objectPosition='50% 0%'
        />
      </div>

      <div className={styles.post}>
        <Image 
        src='/web/in_looking_out.png'
        alt='In Looking Out'
        width={300}
        height={200}
        layout='responsive'
        objectFit='cover'
        objectPosition='50% 0%'
        />
      </div>

      <div className={styles.post}>
        <Image 
        src='/web/BBB.png'
        alt='Facebook Clone'
        width={300}
        height={200}
        layout='responsive'
        objectFit='cover'
        objectPosition='50% 0%'
        />
      </div>

      <h1>
        Web Developer
      </h1>
    </div>
  )
}