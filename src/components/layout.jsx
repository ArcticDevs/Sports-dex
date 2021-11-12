import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Header from './header'
import Hero1 from './hero1'
import Hero2 from './hero2'
import Hero3 from './hero3'
import Hero4 from './hero4'
import Hero5 from './hero5'
import Hero6 from './hero6'
import Hero7 from './hero7'
import Chart from './chart'
import Progression from './compareplayer/progression'
import Tweet from './tweet'
import Profilecard from './profilecard'
import Stats from './Stats'
import Summarychart from './summarychart'
import Per100possesstions from './Per100possesstions'
import Per36mins from './Per36mins'
function Layout(props) {
    return (
        <>
            <Header />
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-9">
                        <Hero1 />
                        <Hero2 />
                        <Hero3 />
                        <Stats />
                        <Hero4 />

                    </div>
                    <div className="col-lg-3">
                        <Tweet />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-9">
                        <Hero5 />
                        <Summarychart />
                        <Hero5 />
                        <Per100possesstions />

                    </div>
                    <div className="col-12 col-lg-3">
                        <Profilecard />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-9">
                        <Hero5 />
                        <Per36mins />
                        <Hero5 />
                        <Summarychart />
                        <Hero7 />
                        <Hero6/>
                    </div>
                    <div className="col-12 col-lg-3">
                        <Profilecard />
                    </div>
                </div>


            </div>
            <Footer />
        </>
    )
}

export default Layout
