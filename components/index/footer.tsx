import Nav from './nav'
import styles from './footer.module.scss'

export default function Footer() {
  return <div className={styles.footer}>
    <Nav className="nav" />
    <ul className={styles.statement}>
      <li>Terms & Conditions</li>
      <li>Privacy Policy</li>
      <li>Cookie Policy</li>
    </ul>
    <p>Copyright 2020 myUni. All Rights Reserved.</p>
  </div>
}