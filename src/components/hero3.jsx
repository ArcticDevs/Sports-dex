import React from 'react'
import styles from '../styles/hero3.module.css'
function Hero3() {
    return (
        <>
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className={styles.bg}>
                        <div className={styles.heading}>
                            overall Stats
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"className={styles.title}></th>
                                    <th scope="col"className={styles.title}>Games</th>
                                    <th scope="col"className={styles.title}>PTS</th>
                                    <th scope="col"className={styles.title}>REB</th>
                                    <th scope="col"className={styles.title}>ASST</th>
                                    <th scope="col"className={styles.title}>2P%</th>
                                    <th scope="col"className={styles.title}>3P%</th>
                                    <th scope="col"className={styles.title}>FT%</th>
                                    <th scope="col"className={styles.title}>EFF%</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Regular</th>
                                    <td className={styles.tr}>13306</td>
                                    <td className={styles.tr}>27</td>
                                    <td className={styles.tr}>7.4</td>
                                    <td className={styles.tr}>7.4</td>
                                    <td className={styles.tr}>7.4</td>
                                    <td className={styles.tr}>7.4</td>
                                    <td className={styles.tr}>7.4</td>
                                    <td className={styles.tr}>7.4</td>
                                </tr>
                                <tr>
                                    <th scope="row">Playoffs</th>
                                    <td className={styles.tr}>13306</td>
                                    <td className={styles.tr}>27</td>
                                    <td className={styles.tr}>7.4</td>
                                    <td className={styles.tr}>7.4</td>
                                    <td className={styles.tr}>7.4</td>
                                    <td className={styles.tr}>7.4</td>
                                    <td className={styles.tr}>7.4</td>
                                    <td className={styles.tr}>7.4</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero3
