import styles from './navbar.module.css'

export default function navbar() {
  return (
    <div className={styles.nav}>
      <a className={styles.name}>Charlie Fischer</a>
    </div>
  )
}