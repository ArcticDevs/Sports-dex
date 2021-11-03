import React from 'react'
import styles from '../styles/hero2.module.css'
function hero2() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-6">
                        <div className={styles.container}>
                            <div className="row text-center">
                                <div className="col-3">
                                    <h2 className={styles.text}>4</h2>
                                    <div className={styles.text2}>Championships</div>

                                </div>
                                <div className="col-3">
                                    <h2 className={styles.text}>4</h2>
                                    <div className={styles.text2}>MVP</div>
                                </div>
                                <div className="col-3">
                                    <h2 className={styles.text}>17/4</h2>
                                    <div className={styles.text2}>All Star / MVP</div>
                                </div>
                                <div className="col-3">
                                    <h2 className={styles.text}>4</h2>
                                    <div className={styles.text2}>Finals MVP</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={styles.container}>
                            <div className="row text-center">
                                <div className="col-4">
                                    <h2 className={styles.text3}>1st in <br/> VORP</h2>
                                    <div className={styles.text4}>129.79</div>
                                </div>
                                <div className="col-4">
                                    <h2 className={styles.text3}>2nd inBox <br/> Plus/minus </h2>
                                    <div className={styles.text4}>8.93</div>
                                </div>
                                <div className="col-4">
                                    <h2 className={styles.text3}>Most Assist <br/> By Forward</h2>
                                    <div className={styles.text4}>9,021</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default hero2
