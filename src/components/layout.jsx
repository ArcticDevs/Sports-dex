import React from 'react'
import Navbar from './navbar'
import Footer  from './footer'
import Header from './header'
import Hero1 from './hero1'
import Hero2 from './hero2'
import Hero3 from './hero3'
import Hero4 from './hero4'
import Hero5 from './hero5'
import Hero6 from './hero6'
import Hero7 from './hero7'
import Accuracy36Chart from './Accuracy36Chart'
import Per100Pos from './Per100Pos'
function Layout(props) {
    return (
        <>
        <Header/>
        <Navbar/>
        <Hero1/>
        <Hero2/>
        <Hero3/>
        <Hero4/>
        <Hero5/>
        <Per100Pos/>
        <Hero7/>
        <Hero6/>
        <Footer/>
        </>
    )
}

export default Layout
