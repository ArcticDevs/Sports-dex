import React from 'react'
import profilepic from '../img/Ellipse 179.png'
import styles from '../styles/profilecard.module.css'

function Profilecard() {
    return (
        <>
            <div className={styles.container}>
                <img src={profilepic}></img>
                <div className={styles.details}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non malesuada nunc, pharetra malesuada tempus turpis velit. Ultrices tellus nunc enim amet, est libero ultrices ut.
                </div>
                <div className="row mt-4 mx-0">
                    <div className="col-3">
                        <p className={styles.num}>27</p>
                        <p className={styles.text}>PTS</p>
                    </div>
                    <div className="col-3">
                    <p className={styles.num}>27</p>
                        <p className={styles.text}>PTS</p>
                    </div>
                    <div className="col-3">
                    <p className={styles.num}>27</p>
                        <p className={styles.text}>PTS</p>
                    </div>
                    <div className="col-3">
                    <p className={styles.num}>27</p>
                        <p className={styles.text}>PTS</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profilecard
