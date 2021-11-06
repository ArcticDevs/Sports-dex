import React from 'react'
import styles from '../styles/hero5.module.css'
function Hero5() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className={styles.container}>
                    <div className="row">
                        <div className={`col-4 border border-secondary text-center pt-2 ${styles.active}`}>
                            <p className={styles.title}>Regular</p>
                        </div>
                        <div className={`col-4 border border-secondary text-center pt-2 ${styles.link}`}>
                            <p className={styles.title}>Regular</p>
                        </div>
                        <div className={`col-4 border border-secondary text-center pt-2 ${styles.link}`}>
                            <p className={styles.title}>Regular</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero5
