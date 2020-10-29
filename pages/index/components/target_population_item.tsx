import styles from './target_population_item.module.scss'

interface Props {
  data: {
    img: string,
    signature: string,
    detail: string,
    hover_signature: string,
    hover_detail: string
  }
}

export default function TargetPopulationItem({ data: {img, signature, detail, hover_signature, hover_detail} } : Props) {
  return <div className={styles.item_wrap}>
      <div className={styles.item}>
      <img src={img} alt=""/>
      <div>
        <p>{detail}</p>
        <span>{signature}</span>
      </div>
    </div>
  </div>
}