import React from 'react'
import styles from '../styles/hero6.module.css'
function Hero6() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className={styles.container}>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <p className={styles.title}>Summary</p>
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
                    
                    <div className="row mt-3 mb-3">
                        <div className={`col-12 ${styles.summaryTableContainer}`}>
                            <div className={styles.headcontainer}>
                                <thead>
                                    <th className="col-1"></th>
                                    <th className="col-1 text-center">games</th>
                                    <th className="col-2  text-center">fieldgoals</th>
                                    <th className="col-2 text-center">three points</th>
                                    <th className="col-1 text-center">free throws</th>
                                    <th className="col-1 text-center">rebounds</th>
                                    <th className="col-1 text-center">Miscellaneous</th>
                                </thead>
                            </div>
                            <table className="table">

                                <thead>
                                    <tr>
                                        <th scope="col" className={styles.heading}>Seasons</th>
                                        <th scope="col" className={styles.heading}>Tm</th>
                                        <th scope="col" className={styles.heading}>G</th>
                                        <th scope="col" className={styles.heading}>mp</th>
                                        <th scope="col" className={styles.heading}>fg</th>
                                        <th scope="col" className={styles.heading}>EGA</th>
                                        <th scope="col" className={styles.heading}>FG%</th>
                                        <th scope="col" className={styles.heading}>3P</th>
                                        <th scope="col" className={styles.heading}>3PA</th>
                                        <th scope="col" className={styles.heading}>3P%</th>
                                        <th scope="col" className={styles.heading}>EFG%</th>
                                        <th scope="col" className={styles.heading}>FT</th>
                                        <th scope="col" className={styles.heading}>FTA</th>
                                        <th scope="col" className={styles.heading}>FT%</th>
                                        <th scope="col" className={styles.heading}>TRB</th>
                                        <th scope="col" className={styles.heading}>AST</th>
                                        <th scope="col" className={styles.heading}>STL</th>
                                        <th scope="col" className={styles.heading}>TOV</th>
                                        <th scope="col" className={styles.heading}>PF</th>
                                        <th scope="col" className={styles.heading}>PTS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">2003-04</th>
                                        <td className={styles.td}>CLE</td>
                                        <td className={styles.td}>76</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>16.1</td>
                                        <td className={styles.td}>18.3</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>18.3</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>0.8</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">2003-04</th>
                                        <td className={styles.td}>CLE</td>
                                        <td className={styles.td}>76</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>16.1</td>
                                        <td className={styles.td}>18.3</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>18.3</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>0.8</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2003-04</th>
                                        <td className={styles.td}>CLE</td>
                                        <td className={styles.td}>76</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>16.1</td>
                                        <td className={styles.td}>18.3</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>18.3</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>0.8</td>
                                    </tr><tr>
                                        <th scope="row">2003-04</th>
                                        <td className={styles.td}>CLE</td>
                                        <td className={styles.td}>76</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>16.1</td>
                                        <td className={styles.td}>18.3</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>18.3</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>0.8</td>
                                    </tr><tr>
                                        <th scope="row">2003-04</th>
                                        <td className={styles.td}>CLE</td>
                                        <td className={styles.td}>76</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>16.1</td>
                                        <td className={styles.td}>18.3</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>18.3</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>0.8</td>
                                    </tr><tr>
                                        <th scope="row">2003-04</th>
                                        <td className={styles.td}>CLE</td>
                                        <td className={styles.td}>76</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>16.1</td>
                                        <td className={styles.td}>18.3</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>18.3</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>0.8</td>
                                    </tr><tr>
                                        <th scope="row">2003-04</th>
                                        <td className={styles.td}>CLE</td>
                                        <td className={styles.td}>76</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>16.1</td>
                                        <td className={styles.td}>18.3</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>18.3</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>0.8</td>
                                    </tr><tr>
                                        <th scope="row">2003-04</th>
                                        <td className={styles.td}>CLE</td>
                                        <td className={styles.td}>76</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>16.1</td>
                                        <td className={styles.td}>18.3</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>18.3</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>0.8</td>
                                    </tr><tr>
                                        <th scope="row">2003-04</th>
                                        <td className={styles.td}>CLE</td>
                                        <td className={styles.td}>76</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>16.1</td>
                                        <td className={styles.td}>18.3</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>18.3</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>0.8</td>
                                    </tr><tr>
                                        <th scope="row">2003-04</th>
                                        <td className={styles.td}>CLE</td>
                                        <td className={styles.td}>76</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>16.1</td>
                                        <td className={styles.td}>18.3</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>18.3</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>0.8</td>
                                    </tr><tr>
                                        <th scope="row">2003-04</th>
                                        <td className={styles.td}>CLE</td>
                                        <td className={styles.td}>76</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>16.1</td>
                                        <td className={styles.td}>18.3</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>18.3</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>0.8</td>
                                    </tr><tr>
                                        <th scope="row">2003-04</th>
                                        <td className={styles.td}>CLE</td>
                                        <td className={styles.td}>76</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>16.1</td>
                                        <td className={styles.td}>18.3</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>18.3</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>39.5</td>
                                        <td className={styles.td}>7.1</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>2.7</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>0.8</td>
                                        <td className={styles.td}>0.8</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero6
