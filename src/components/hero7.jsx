import React from 'react'
import { useState } from 'react'
import styles from '../styles/hero7.module.css'
import img1 from '../img/image 1.png'
import nation from '../img/photo1.png'
import Carousel from 'react-elastic-carousel'
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

function Hero7() {
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    return (
        <>
            <div className=" mt-5 mb-5">
                <div className={styles.container}>
                    <p className={styles.title}>People also looked for: </p>

                    <Carousel>
                        <div>
                            <div className=" px-1 text-center mb-3">
                                <div className={styles.frame}>
                                    <div className={styles.profileframe}>
                                        <img src={img1} className={styles.profile} alt="img1"></img>
                                    </div>
                                    <img src={nation} style={{ maxWidth: "100%" }} alt="img1"></img>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=" px-1 text-center mb-3">
                                <div className={styles.frame}>
                                    <div className={styles.profileframe}>
                                        <img src={img1} className={styles.profile} alt="img1"></img>
                                    </div>
                                    <img src={nation} style={{ maxWidth: "100%" }} alt="img1"></img>
                                </div>
                            </div>
                        </div><div>
                            <div className=" px-1 text-center mb-3">
                                <div className={styles.frame}>
                                    <div className={styles.profileframe}>
                                        <img src={img1} className={styles.profile} alt="img1"></img>
                                    </div>
                                    <img src={nation} style={{ maxWidth: "100%" }} alt="img1"></img>
                                </div>
                            </div>
                        </div><div>
                            <div className=" px-1 text-center mb-3">
                                <div className={styles.frame}>
                                    <div className={styles.profileframe}>
                                        <img src={img1} className={styles.profile} alt="img1"></img>
                                    </div>
                                    <img src={nation} style={{ maxWidth: "100%" }} alt="img1"></img>
                                </div>
                            </div>
                        </div><div>
                            <div className=" px-1 text-center mb-3">
                                <div className={styles.frame}>
                                    <div className={styles.profileframe}>
                                        <img src={img1} className={styles.profile} alt="img1"></img>
                                    </div>
                                    <img src={nation} style={{ maxWidth: "100%" }} alt="img1"></img>
                                </div>
                            </div>
                        </div><div>
                            <div className=" px-1 text-center mb-3">
                                <div className={styles.frame}>
                                    <div className={styles.profileframe}>
                                        <img src={img1} className={styles.profile} alt="img1"></img>
                                    </div>
                                    <img src={nation} style={{ maxWidth: "100%" }} alt="img1"></img>
                                </div>
                            </div>
                        </div><div>
                            <div className="px-1 text-center mb-3">
                                <div className={styles.frame}>
                                    <div className={styles.profileframe}>
                                        <img src={img1} className={styles.profile} alt="img1"></img>
                                    </div>
                                    <img src={nation} style={{ maxWidth: "100%" }} alt="img1"></img>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}
export default Hero7
