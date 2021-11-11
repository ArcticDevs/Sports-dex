import react from "react"
import '../styles/hero1.css'
import image2 from "../img/Photo.png"
import image1 from "../img/photo1.png"

function Hero1() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="customContainer">
                    <p className="PlayerName mx-auto mt-3">Lebron James</p>
                    <p className="PlayerDetails mx-auto">
                        LA LAKERS, SMALL FORWARD, SHOOTS RIGHT
                    </p>
                    <div className="row px-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 text-center text-lg-end">
                            <p>
                                <span className="text"> Height: </span> 6’9”
                                <span className="text"> Wt. : </span>

                                250 lb. (113 kg)
                            </p>
                            <p>
                                <span className="text">Age :</span> 36 yrs (30 Dec, 1984), Akron, Ohio
                            </p>
                            <p>
                                <span className="text">
                                    Salary:
                                </span>
                                2020-21 : <span className="text-success">
                                    $39,219,566
                                </span>

                            </p>
                            <img src={image1} className="img" />
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <img src={image2}  style={{maxWidth:"100%"}}/>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="col-12 Box">
                                    <div className="row">

                                        <div className="col-3">
                                            <h3>
                                                27
                                            </h3>
                                            <p className="text-primary">
                                                PTS
                                            </p>
                                        </div>
                                        <div className="col-3">
                                            <h3>
                                                7.4
                                            </h3>
                                            <p className="text-primary">
                                                REB
                                            </p>
                                        </div>
                                        <div className="col-3">
                                            <h3>
                                                7.4
                                            </h3>
                                            <p className="text-primary">
                                                ASST
                                            </p>
                                        </div>
                                        <div className="col-3">
                                            <h3>
                                                27
                                            </h3>
                                            <p className="text-primary">
                                                eFG%
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row mt-5">
                                <div className="col-5 follow d-flex justify-content-center align-items-center">+ Follow </div>
                                <div className="col-2"></div>
                                <div className="col-5 comparePlayer d-flex justify-content-center align-items-center"> <div className=" m-3">Compare Players</div> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero1
// import styles from '../styles/hero1.module.css'
// import React from 'react'

// function Hero1() {
//     return (
//         <>
//             <div className="container mt-2 mb-5">
//                 <div className="row">
//                     <div>
//                         <p className={`${styles.PlayerName} mx-auto mt-5`}>Lebron James</p>
//                         <p className={`${styles.PlayerDetails} mx-auto`}>
//                             LA LAKERS, SMALL FORWARD, SHOOTS RIGHT
//                         </p>
//                     </div>
//                     <div className="col-8">
//                         <div className={StyleSheet.container}>
//                             <div className="row">
//                                 <div className="col-4">
//                                     <p>
//                                         <span className="text"> Height: </span> 6’9”
//                                         <span className="text"> Wt. : </span>
//                                         250 lb. (113 kg)
//                                     </p>
//                                     <p>
//                                         <span className="text">Age :</span> 36 yrs (30 Dec, 1984), Akron, Ohio
//                                     </p>
//                                     <p>
//                                         <span className="text">
//                                             Salary:
//                                         </span>
//                                         2020-21 : <span className="text-success">
//                                             $39,219,566
//                                         </span>

//                                     </p>
//                                     <img src={image1} className={styles.img} alt="image1" />
//                                 </div>
//                                 <div className="col-4">
//                                     <img src={image2} className={styles.Photo} alt="photo" />
//                                 </div>
//                                 <div className="col-4">
//                                     <div className="row border border-primary">
//                                         <div className="col-3">
//                                             <h3>
//                                                 27
//                                             </h3>                                    <p className="text-primary">
//                                                 PTS
//                                             </p>
//                                         </div>
//                                         <div className="col-3">
//                                             <h3>
//                                                 7.4
//                                             </h3>
//                                             <p className="text-primary">
//                                                 REB
//                                             </p>
//                                         </div>
//                                         <div className="col-3">
//                                             <h3>
//                                                 7.4                                     </h3>
//                                             <p className="text-primary">
//                                                 ASST
//                                             </p>
//                                         </div>
//                                         <div className="col-3">
//                                             <h3>
//                                                 27
//                                             </h3>
//                                             <p className="text-primary">
//                                                 eFG%
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-4">
//                         <div className={StyleSheet.container}>
//                             <div className="row">
//                                 <div className="col">

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Hero1
