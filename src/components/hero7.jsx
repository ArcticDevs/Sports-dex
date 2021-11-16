import React from 'react'
import styles from '../styles/hero7.module.css'
import img1 from '../img/image 1.png'
import nation from '../img/photo1.png'
import Carousel from 'react-elastic-carousel'
function Hero7() {
    return (
        <>
            <div className=" mt-5 mb-5">
                <div className={styles.container}>
                    <p className={styles.title}>People also looked for: </p>

                    <Carousel>
                        <div className="col-lg-2 col-md-4 col-sm-6 px-1 text-center mb-3">
                            <div className={styles.frame}>
                                <div className={styles.profileframe}>
                                    <img src={img1} className={styles.profile} alt="img1"></img>
                                </div>
                                <img src={nation} style={{maxWidth:"100%"}} alt="img1"></img>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 px-1 text-center  mb-3">
                            <div className={styles.frame}>
                                <div className={styles.profileframe}>
                                    <img src={img1} className={styles.profile} alt="img1"></img>
                                </div>
                                <img src={nation}  style={{maxWidth:"100%"}}  alt="img1"></img>
                            </div>
                        </div><div className="col-lg-2 col-md-4 col-sm-6 px-1 text-center  mb-3">
                            <div className={styles.frame}>
                                <div className={styles.profileframe}>
                                    <img src={img1} className={styles.profile} alt="img1"></img>
                                </div>
                                <img src={nation}  style={{maxWidth:"100%"}}  alt="img1"></img>
                            </div>
                        </div><div className="col-lg-2 col-md-4 col-sm-6 px-1 text-center  mb-3">
                            <div className={styles.frame}>
                                <div className={styles.profileframe}>
                                    <img src={img1} className={styles.profile} alt="img1"></img>
                                </div>
                                <img src={nation}  style={{maxWidth:"100%"}}  alt="img1"></img>
                            </div>
                        </div><div className="col-lg-2 col-md-4 col-sm-6 px-1 text-center  mb-3">
                            <div className={styles.frame}>
                                <div className={styles.profileframe}>
                                    <img src={img1} className={styles.profile} alt="img1"></img>
                                </div>
                                <img src={nation}  style={{maxWidth:"100%"}}  alt="img1"></img>
                            </div>
                        </div><div className="col-lg-2 col-md-4 col-sm-6 px-1 text-center">
                            <div className={styles.frame}>
                                <div className={styles.profileframe}>
                                    <img src={img1} className={styles.profile} alt="img1"></img>
                                </div>
                                <img src={nation}  style={{maxWidth:"100%"}}  alt="img1"></img>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}
export default Hero7
