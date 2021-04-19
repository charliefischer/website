import styles from './about.module.css'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Head from 'next/head'

export default function about() {
  return(
    <div>
      <Head>
        <title>Charlie Fischer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.title}>
          About Me
        </div>
        <div className={styles.content}>
          <p>
            My name’s Charlie, I’m a junior full stack web developer and freelance illustrator with a love for observational humour. I recently completed a four month coding bootcamp at Makers Academy where I taught myself Javascript and Ruby by building a range of applications and websites. In the process I gained a sound understanding of OOP, Agile methodologies and test driven development. What excites me most about web development is applying my creative thinking to problem solving; attacking any challenge from different angles and thinking of new ways around a problem as well as providing clean and fresh designed user interfaces.
          </p>
          <p>
            I'm now looking to take my skills into my first developer role.
          </p>
          <div className={styles.links}>
            <div className={styles.link}>
              <Link href='https://github.com/charliefischer'>
                <a>Github</a>
              </Link>
            </div>
            <div className={styles.link}>
              <Link href='mailto: charlie.a.fischer@gmail.com'>
                <a>Email</a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.image}>
          <img className={styles.brain} src='/about/brain.jpg' alt='Self Portrait' />
        </div>
      </div>
    </div>
    
  )
}