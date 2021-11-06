import React from 'react'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img1 from '../img/ball.png'
import img2 from '../img/ball1.png'
import img3 from '../img/ball2.png'
import img4 from '../img/ball3.png'
import styles from '../styles/hero4.module.css'
function Hero4() {
    return (
        <>
            <div className="container">
                <div className={styles.container}>
                    <div className="row mt-5 mb-5">
                        <div className="col-4">
                            <div className="row">
                                <div className="col-4">
                                    <FontAwesomeIcon className={styles.prize} icon={faTrophy} />
                                </div>
                                <div className="col-8">
                                    <p className={styles.details}><span className={styles.para}>4 NBA Champions,</span><br />
                                        4 finals MVP, <br />
                                        4 MVP...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <p className={styles.about}>About:</p>
                            <p className={styles.aboutpara}>LeBron Raymone James Sr. is an American professional<br /> basketball player...  <span className={styles.bio}>See full Bio</span></p>
                        </div>
                        <div className="col-2  mt-5">
                            <button className={styles.btn}>See all rewards</button>
                        </div>
                    </div>
                    <div className="row mt-5 mb-3">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">N/A</th>
                                    <th scope="col">Cleveland Cavalier ></th>
                                    <th scope="col">Cleveland Cavalier ></th>
                                    <th scope="col">Miami Heat ></th>
                                    <th scope="col">Cleveland Cavalier ></th>
                                    <th scope="col">LA Lakers</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">College</th>
                                    <td>Draft (2003) Round 1/Pick1</td>
                                    <td>2003 - 10</td>
                                    <td>2010 - 14</td>
                                    <td>2014 - 18</td>
                                    <td>2018 - present</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row mt-5 mb-5">
                        <p className={styles.title}>Memorable Videos</p>
                        <div className="col-3">
                            <img src={img1} className={styles.video} alt="ball"  />
                            <p className={styles.videotitle}>Lebrons highlights</p>
                        </div>
                        <div className="col-3">
                            <img src={img2} className={styles.video} alt="ball"  />
                            <p className={styles.videotitle}>Lebrons highlights</p>
                        </div>
                        <div className="col-3">
                            <img src={img3} className={styles.video} alt="ball"  />
                            <p className={styles.videotitle}>Lebrons highlights</p>
                        </div>
                        <div className="col-3">
                            <img src={img4} className={styles.video} alt="ball"  />
                            <p className={styles.videotitle}>Lebrons highlights</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero4
