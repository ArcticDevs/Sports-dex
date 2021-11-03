import React from 'react'
import '../styles/hero1.css'
import image2 from "../img/Photo.png"
import image1 from "../img/photo1.png"

function Hero1() {
    return (
        <>
            <div class="container">
                <div class="customContainer">
                    <p class="PlayerName mx-auto mt-5">Lebron James</p>
                    <p class="PlayerDetails mx-auto">
                        LA LAKERS, SMALL FORWARD, SHOOTS RIGHT
                    </p>
                    <div class="row container m-0">
                        <div class="col-4 text-right">
                            <p>
                                <span class="text"> Height: </span> 6’9”
                                <span class="text"> Wt. : </span>

                                250 lb. (113 kg)
                            </p>
                            <p>
                                <span class="text">Age :</span> 36 yrs (30 Dec, 1984), Akron, Ohio
                            </p>
                            <p>
                                <span class="text">
                                    Salary:
                                </span>
                                2020-21 : <span class="text-success">
                                    $39,219,566
                                </span>

                            </p>
                            <img src={image1} class="img" />
                        </div>
                        <div class="col-4">
                            <img src={image2} class="Photo" />
                        </div>
                        <div class="col-4">
                            <div class="row Box">
                                <div class="col-3">
                                    <h3>
                                        27
                                    </h3>
                                    <p class="text-primary">
                                        PTS
                                    </p>
                                </div>
                                <div class="col-3">
                                    <h3>
                                        7.4
                                    </h3>
                                    <p class="text-primary">
                                        REB
                                    </p>
                                </div>
                                <div class="col-3">
                                    <h3>
                                        7.4
                                    </h3>
                                    <p class="text-primary">
                                        ASST
                                    </p>
                                </div>
                                <div class="col-3">
                                    <h3>
                                        27
                                    </h3>
                                    <p class="text-primary">
                                        eFG%
                                    </p>
                                </div>

                            </div>
                            <div class="row mt-5">
                                <div class="col-5 follow"> + Follow </div>
                                <div class="col-1"></div>
                                <div class="col-5 comparePlayer"> Compare Player</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero1
