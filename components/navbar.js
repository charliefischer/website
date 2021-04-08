import Link from 'next/link'
import styles from './navbar.module.css'

export default function navbar() {
  return (
    <div className={styles.nav}>
      <Link href='/'>
        <a className={styles.name}>Charlie Fischer</a>
      </Link>
      <Link href='/about'>
      <a className={styles.about}>About Me</a>
      </Link>
    </div>
  )
}