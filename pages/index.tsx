import Head from 'next/head'
import cn from 'classnames'
import CompanyCooperation from './index/components/company_cooperation'
import Nav from './index/components/nav'
import Footer from './index/components/footer'
import styles from './index.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>myUni</title>
      </Head>
      <div className={styles.main}>
        <header className={styles.header}>
          <div className={styles.w1200}>
          <Nav />
          </div>
        </header>

        <div className={styles.banner}>
          <img src="/image/home/banner/1.png" alt=""/>
        </div>

        <div className={styles.university_cooperation}>
          <div className={cn(styles.content, styles.w1200)}>
            <h6>We partner with global <br />universities...</h6>
            <div className={styles.swiper_box}>
              <div className={styles.swiper}>
                <div className={styles.item}>
                  <img className={styles.img} src="/image/home/university_cooperation/1.png" alt=""/>
                  <div className={styles.text}>
                    <img src="/image/home/quotation_mark.png" alt=""/>
                    <p>We are keen to enter China, and offer our world-class education to potential Chinese students. But we don't really know the local policies and student management. Thanks to myUni, they are a trusted partner.</p>
                    <span>— Adam S., ABC University</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.target_population}>占位</div>

        <div className={styles.company_cooperation}>
          <div className={cn(styles.content, styles.w1200)}>
            <h6>With international<br />corporations</h6>
            <CompanyCooperation />
          </div>
        </div>

        <div className={styles.map}>
          <div className={cn(styles.w1200, styles.content)}>
            <h6>We have 8 supporting offices <br />in both UK and China</h6>
            <img src="/image/home/map.png" alt=""/>
          </div>
        </div>

        <footer>
          <div className={cn(styles.w1200, styles.content)}>
            <Footer />
          </div>
        </footer>
      </div>
    </>
  )
}
