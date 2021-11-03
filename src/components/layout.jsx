import React from 'react'
import Navbar from './navbar'
import Footer  from './footer'
import Header from './header'
import Hero1 from './hero1'
import Hero2 from './hero2'
import Hero3 from './hero3'

function Layout(props) {
    return (
        <>
        <Header/>
        <Navbar/>
        <Hero1/>
        <Hero2/>
        <Hero3/>

        <Footer/>
        </>
    )
}

export default Layout
