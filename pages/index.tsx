import Head from 'next/head'
import cn from 'classnames'
import { useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper'
import CompanyCooperation from './index/components/company_cooperation'
import UniversityCooperationItem from './index/components/university_cooperation_item'
import TargetPopulationItem from './index/components/target_population_item'
import Nav from './index/components/nav'
import Footer from './index/components/footer'
import styles from './index.module.scss'

SwiperCore.use([Navigation, Pagination, EffectFade]);

const university_cooperation = [{
  img: '/image/home/university_cooperation/1.png',
  signature: "We are keen to enter China, and offer our world-class education to potential Chinese students. But we don't really know the local policies and student management. Thanks to myUni, they are a trusted partner.",
  detail: '— Adam S., ABC University'
},{
  img: '/image/home/university_cooperation/2.png',
  signature: 'With technological development, it seems we can reach the global information without barriers, but China is a special place and we need to learn the local know-hows to better serve the students. myUni is our long-term partner in this area, as they have local expertise and global vision.',
  detail: '— Stephen A., CDE University'
},{
  img: '/image/home/university_cooperation/3.png',
  signature: 'As a reputable university, we need support in marketing, enrollment management, and student retention to offer online courses to international students. And myUni is doing just that! ',
  detail: '— Vincent P., XYZ University'
}]

const target_population = [{
  img: '/image/home/target_population/1.png',
  signature: '— Xiaoyue H., Tencent, China',
  detail: '… combine my interests with my current job…',
  hover_detail: "I'm working full-time right now, and would like to obtain a Psychology master degree in an overseas university to explore my interests. myUni is doing just that, it allows me to combine my interests with my current job. ",
  hover_signature: '— Cindy L., Entrepreneur, China'
},{
  img: '/image/home/target_population/2.png',
  signature: '— KK H., Shenzhen University, China',
  detail: '… stay in China and take an online Master degree to advance my…',
  hover_detail: "I applied for UK universities but fear to go abroad due to the COVID-19, I'd like to stay in China and take an online Master degree to advance my studies and further my career progression.",
  hover_signature: '— KK H., Shenzhen University, China'
},{
  img: '/image/home/target_population/3.png',
  signature: '— Hong L., graduate, China',
  detail: "… It's affordable with high quality degree courses…",
  hover_detail: "I just graduated from BA degree and want to pursue a higher degree education, but I dont' have enough money to go abroad. With myUni, my dream of having a global education is realized. It's affordable with high quality degree courses. Thank you myUni! ",
  hover_signature: '— Hong L., graduate, China'
},{
  img: '/image/home/target_population/4.png',
  signature: '— Armand L., Entrepreneur, China',
  detail: '… I do want to learn from the top faculties on how to run a business…',
  hover_detail: "I'm an entrepreneur and have millions of things to do every day. But I do want to learn from the top faculties on how to run a business properly, so I want to take an online degree course. myUni is a great platform and I believe it can transform my learning experience and ultimately my company.",
  hover_signature: '— Cindy L., Entrepreneur, China'
}]

function useClientRect(right) {
  const [rect, setRect] = useState(null);
  const ref = useCallback(node => {
    if (node !== null) {
      console.log(588888, node)
      setRect(node.getBoundingClientRect());
    }
  }, [right]);
  return [rect, ref]
}

export default function Home() {
  const [right, setRight] = useState(0)
  const [rect, ref] = useClientRect(right);

  console.log(68, rect)
  useEffect(() => {
    function handleWindowResize(e) {
      const innerWidth = e.target.innerWidth
      // console.log(744444, rect)
      // if (innerWidth >= 1200 && right !== rect.left) {
      //   setRight(rect.left)
      // }
      console.log(28888, right, rect, ref)
    }

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

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
              <Swiper
                navigation
                pagination
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {
                  university_cooperation.map((item, index) => <SwiperSlide key={index}><UniversityCooperationItem data={item} /></SwiperSlide>)
                }
              </Swiper>
            </div>
          </div>
        </div>

        <div className={styles.target_population}>
          <h6 ref={ref}>For graduates and<br />young professionals...</h6>
          <div className={styles.swiper_box}>
            <Swiper
              slidesPerView={4}
              spaceBetween={60}
              navigation
              // loop={true}
              centeredSlides={true}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {
                target_population.map((item, index) => <SwiperSlide key={index}><TargetPopulationItem style={{'padding-top': '169px'}} data={item} /></SwiperSlide>)
              }
            </Swiper>
          </div>
        </div>

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
