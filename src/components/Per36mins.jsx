import React from 'react'
import styles from '../styles/summary.module.css'
import Progression from './compareplayer/progression'
function Per36mins() {
    return (
        <>
            <div className="mt-5 mb-5">
                <div className={styles.container}>
                    <div className="row mt-3">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <p className={styles.title}>per 36 mins</p>
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
                    <div className="overflow-auto">
                    <Progression/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Per36mins
