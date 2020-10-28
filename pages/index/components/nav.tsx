import cn from 'classnames'
import styles from './nav.module.scss'

interface Props {
  nav_style?: string,
  className?: string,
}

Nav.defaultProps = {
  nav_style: ''
}

export default function Nav({ className }: Props) {
  return <div className={cn(styles.nav, [className])}>
      <h1><img src="/image/logo.png" alt="myUni logo"/></h1>
      <ul>
        <li>Degrees</li>
        <li>Masterclass</li>
        <li>Scholarship</li>
      </ul>
  </div>
}