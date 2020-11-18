import { useState, useEffect } from 'react'
import cn from 'classnames'
import { CSSTransition } from 'react-transition-group'
import styles from './company_cooperation_item.module.scss'
import { useTop, useIsIn } from '../../hook'
import companyCooperationStyles from '../../company_cooperation.module.scss'

interface Props {
  data: {
    img: string,
    signature: string,
    detail: string
  },
  num: number
}

export default function CompanyCooperationItem({ data, num } : Props) {
  const [ref, top, setTop] = useTop()
  const [isIn, setIsIn] = useState(false)

  useEffect(() => {
    setIsIn(useIsIn(top))
  }, [top])

  useEffect(() => {
    function scrollAnimation() {
      setTop()
    }

    window.addEventListener('scroll', scrollAnimation)
    return () =>window.removeEventListener('scroll', scrollAnimation)
  }, [])

  return <CSSTransition in={isIn} timeout={2000} classNames={{...companyCooperationStyles}}>
      <div ref={ref} className={cn(styles.company_cooperation_item, {[styles.row_reverse]: !!(num % 2)})}>
      <div className={styles.text}>
        <img src="/image/home/quotation_mark.png" alt=""/>
        <p>{data.detail}</p>
        <span>{data.signature}</span>
      </div>
      <div><img src={data.img} alt=""/></div>
    </div>
  </CSSTransition>
}