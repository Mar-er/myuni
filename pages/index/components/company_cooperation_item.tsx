import cn from 'classnames'
import styles from './company_cooperation_item.module.scss'

interface Props {
  data: {
    img: string,
    signature: string,
    detail: string
  },
  num: number
}

export default function CompanyCooperationItem({ data, num } : Props) {
  return <div className={cn(styles.company_cooperation_item, {[styles.row_reverse]: !!(num % 2)})}>
    <div className={styles.text}>
      <img src="/image/home/quotation_mark.png" alt=""/>
      <p>{data.detail}</p>
      <span>{data.signature}</span>
    </div>
    <img className={styles.photo} src={data.img} alt=""/>
  </div>
}