import React from 'react'
import tweet from '../img/tweeet.PNG'
import styles from '../styles/tweet.module.css'

function Tweet() {
    return (
        <>
            <div className={`${styles.container} d-nonde d-ld-block`}>
            <div className="card">
                <div className={styles.text}>
                    James LeBorn
                </div>
                <div className="card-body">
                    <img src={tweet} style={{maxWidth:"100%"}}></img>
                </div>
            </div>
            </div>
        </>
    )
}

export default Tweet
