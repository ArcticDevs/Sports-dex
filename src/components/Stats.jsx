import React from 'react'
import styles from '../styles/stats.module.css'
import Chart from './chart'
function Stats() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className={styles.container}>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <p className={styles.title}>2020 - 21 STATS</p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 text-center">
                            <table className={`table ${styles.table}`}>
                                <thead>
                                    <tr>
                                        <th scope="col">Game</th>
                                        <th scope="col">PTS</th>
                                        <th scope="col">2PTS</th>
                                        <th scope="col">3PTS</th>
                                        <th scope="col">2PTS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1306</th>
                                        <th >27</th>
                                        <th>7.4</th>
                                        <th>7.4</th>
                                        <th>51.3</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <Chart/>
                </div>

            </div>
        </>
    )
}

export default Stats