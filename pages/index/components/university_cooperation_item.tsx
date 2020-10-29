import styles from './university_cooperation_item.module.scss'
interface Props {
  data: {
    img: string,
    detail: string,
    signature: string
  }
}

export default function UniversityCooperationItem({data}: Props) {
  return  <div className={styles.item}>
    <img className={styles.img} src={data.img} alt=""/>
    <div className={styles.text}>
      <img src="/image/home/quotation_mark.png" alt=""/>
      <p>{data.detail}</p>
      <span>{data.signature}</span>
    </div>
  </div>
}