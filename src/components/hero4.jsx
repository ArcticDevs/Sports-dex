import React from 'react'
import { useState } from 'react'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img1 from '../img/ball.png'
import img2 from '../img/ball1.png'
import img3 from '../img/ball2.png'
import img4 from '../img/ball3.png'
import styles from '../styles/hero4.module.css'
import Carousel from 'react-elastic-carousel'
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];


function Hero4() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <>
      <div>
        <div className={styles.container}>
          <div className="row mt-5 mb-5">
            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-2 col-2 text-center text-lg-start">
                  <FontAwesomeIcon className={styles.prize} icon={faTrophy} />
                </div>
                <div className="col-lg-8 col-md-12 col-sm-5 col-7 text-start text-lg-start ">
                  <p className={styles.details}>
                    <span className={styles.para}>4 NBA Champions,</span>
                    <br />
                    4 finals MVP, <br />4 MVP...
                  </p>
                </div>
                <div className="px-0 col-lg-2 col-md-12 col-sm-12 col-3 d-lg-none d-block ">
                  <button className={styles.btn}>See all rewards</button>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <p className={styles.about}>About:</p>
              <p className={styles.aboutpara}>
                LeBron Raymone James Sr. is an American professional
                <br /> basketball player...{" "}
                <span className={styles.bio}>See full Bio</span>
              </p>
            </div>
            <div className="col-lg-2 col-md-12 col-sm-12 col-3 d-lg-block d-none ">
              <button className={styles.btn}>See all rewards</button>
            </div>
          </div>
          <div className="row mt-5 mb-3">
            <div className={styles.table}>
              <table class="table">
                <thead>
                  <tr>
                    <td className={styles.head} scope="col" >N/A</td>
                    <td className={styles.head} scope="col min-w-200px">Cleveland Cavalier ></td>
                    <td className={styles.head} scope="col">Cleveland Cavalier ></td>
                    <td className={styles.head} scope="col">Miami Heat ></td>
                    <td className={styles.head} scope="col">Cleveland Cavalier ></td>
                    <td className={styles.head} scope="col">LA Lakers</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.data}>College</td>
                    <td className={styles.data}>Draft (2003) Round 1/Pick1</td>
                    <td className={styles.data}>2003 - 10</td>
                    <td className={styles.data}>2010 - 14</td>
                    <td className={styles.data}>2014 - 18</td>
                    <td className={styles.data}>2018 - present</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <div className="row mt-5 mb-5">
            <p className={styles.title}>Memorable Videos</p>
            <div className="col-lg-3 col-md-6 c col-sm-12">
              <img src={img1} className={styles.video} alt="ball" />
              <p className={styles.videotitle}>Lebrons highlights</p>
            </div>
            <div className="col-lg-3 col-md-6 c col-sm-12">
              <img src={img2} className={styles.video} alt="ball" />
              <p className={styles.videotitle}>Lebrons highlights</p>
            </div>
            <div className="col-lg-3 col-md-6 c col-sm-12">
              <img src={img3} className={styles.video} alt="ball" />
              <p className={styles.videotitle}>Lebrons highlights</p>
            </div>
            <div className="col-lg-3 col-md-6 c col-sm-12">
              <img src={img4} className={styles.video} alt="ball" />
              <p className={styles.videotitle}>Lebrons highlights</p>
            </div>
          </div> */}

          <Carousel breakPoints={breakPoints}>
            {/* {items.map((item) => (
              <Item key={item}>{item}</Item>
            ))} */}
            <div>
              <img src={img1} className={styles.video} alt="ball" />
              <p className={styles.videotitle}>Lebrons highlights</p>
            </div>
            <div>
              <img src={img1} className={styles.video} alt="ball" />
              <p className={styles.videotitle}>Lebrons highlights</p>
            </div>
            <div>
              <img src={img1} className={styles.video} alt="ball" />
              <p className={styles.videotitle}>Lebrons highlights</p>
            </div>
            <div>
              <img src={img1} className={styles.video} alt="ball" />
              <p className={styles.videotitle}>Lebrons highlights</p>
            </div>
            <div>
              <img src={img1} className={styles.video} alt="ball" />
              <p className={styles.videotitle}>Lebrons highlights</p>
            </div>
            <div>
              <img src={img1} className={styles.video} alt="ball" />
              <p className={styles.videotitle}>Lebrons highlights</p>
            </div>
          </Carousel>

        </div>
      </div>
    </>
  );
}

export default Hero4
