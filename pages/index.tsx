import Head from 'next/head'
import cn from 'classnames'
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper'
import { CSSTransition } from 'react-transition-group'
import CompanyCooperation from './index/components/company_cooperation'
import UniversityCooperationItem from './index/components/university_cooperation_item'
import TargetPopulationItem from './index/components/target_population_item'
import Nav from './index/components/nav'
import Footer from './index/components/footer'
import styles from './index.module.scss'
import companyCooperationStyles from './company_cooperation.module.scss'
import { university_cooperation, target_population } from './index/data'
import { useTop, useIsIn } from './hook'

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);

// 设置right
function setRight() {
  const bodyWidth = document.body.clientWidth;
  const btnRight = bodyWidth > 1200 ? (bodyWidth - 1200) / 2 : 0;
  (document.querySelectorAll('.swiper-button-next')[1] as HTMLImageElement).style.cssText += `right: ${btnRight}px`;
  (document.querySelectorAll('.swiper-button-prev')[1] as HTMLImageElement).style.cssText += `left: ${1200 + btnRight - 10 - 55 * 2}px;`;
}

export default function Home() {
  const [refTargetPopulation, targetPopulationTop, setTargetPopulationTop] = useTop()
  const [isIn, setIsIn] = useState(false)

  useEffect(() => {
    setRight()
  }, [])

  useEffect(() => {
    setIsIn(useIsIn(targetPopulationTop))
  }, [targetPopulationTop])

  useEffect(() => {
    function handleWindowResize() {
      setRight()
    }
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  useEffect(() => {
    function scrollAnimation() {
      setTargetPopulationTop()
    }

    window.addEventListener('scroll', scrollAnimation)
    return () =>window.removeEventListener('scroll', scrollAnimation)
  }, [])

  return (
    <>
      <Head>
        <title>myUni</title>
      </Head>
      <div className={styles.main}>
        <header className={styles.header}>
          <div className={styles.w1200}>
          <Nav className="nav" />
          </div>
        </header>

        <div className={styles.banner}>
          <Swiper
            pagination={{
              clickable: true
            }}
            loop={true}
            autoplay={{
              delay: 5000
            }}
            fadeEffect={{
              crossFade: true
            }}
          >
            {
              [1,2].map((item, index) => <SwiperSlide key={index}><img src={`/image/home/banner/${item}.jpg`} alt=""/></SwiperSlide>)
            }
          </Swiper>
        </div>

        <div className={styles.university_cooperation}>
          <div className={cn(styles.content, styles.w1200)}>
            <h6>We partner with global <br />universities...</h6>
            <div className={styles.swiper_box}>
              <Swiper
                navigation
                loop={true}
                pagination={{
                  clickable: true
                }}
              >
                {
                  university_cooperation.map((item, index) => <SwiperSlide key={index}><UniversityCooperationItem data={item} /></SwiperSlide>)
                }
              </Swiper>
            </div>
          </div>
        </div>

        <div className={styles.target_population}>
          <h6>For graduates and<br />young professionals...</h6>
          <div className={styles.swiper_box}>
            <Swiper
              slidesPerView={4}
              spaceBetween={60}
              navigation
              initialSlide={1}
              centeredSlides={true}
            >
              {
                target_population.map((item, index) => <SwiperSlide key={index}><TargetPopulationItem style={{paddingTop: '169px'}} data={item} /></SwiperSlide>)
              }
            </Swiper>
          </div>
        </div>

          <div className={styles.company_cooperation} ref={refTargetPopulation}>
            <div className={cn(styles.content, styles.w1334)}>
              <CSSTransition in={isIn} timeout={2000} classNames={{...companyCooperationStyles}}>
                  <h6>With international<br />corporations</h6>
              </CSSTransition>
              <CompanyCooperation />
            </div>
          </div>

        <div className={styles.map}>
          <div className={cn(styles.w1200, styles.content)}>
            <h6>We have 8 supporting offices <br />in both UK and China</h6>
            <img src="/image/home/map.png" alt="" style={{width: '100%'}}/>
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
