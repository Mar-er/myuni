import { useState } from 'react'
import cn from 'classnames'
import styles from './target_population_item.module.scss'

interface Props {
  data: {
    img: string,
    signature: string,
    detail: string,
    hover_signature: string,
    hover_detail: string
  },
  style: Object
}

export default function TargetPopulationItem({ data: {img, signature, detail, hover_signature, hover_detail}, style } : Props) {
  const [isHover, setHover] = useState(false)
  const onMouseLeave = () => {
    setHover(false)
  }

  const onMouseOver = () => {
    setHover(true)
  }

  return <div className={styles.item_wrap} style={style}>
      <div className={cn(styles.item, isHover ? styles.hover: '')} onMouseLeave={onMouseLeave} onMouseOver={onMouseOver}>
        <div className={styles.modality}>
          <div className={styles.img_wrap}><img src="/image/home/anti_white_mark.jpg" alt=""/></div>
          <p className={styles.hover_detail}>{hover_detail}</p>
          <p className={styles.hover_signature}>{hover_signature}</p>
        </div>
        <div className={styles.default}>
          <img src={img} alt=""/>
          <div className={styles.text}>
            <p>{detail}</p>
            <span>{signature}</span>
          </div>
        </div>
    </div>
  </div>
}