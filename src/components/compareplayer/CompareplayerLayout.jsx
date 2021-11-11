import React from 'react'
import Footer from '../footer'
import Header from '../header'
import Navbar from '../navbar'
import Complayerplayer from './complayerplayer'
import Comparenavbar from './comparenavbar'
import Overall from './overall'
import Progression from './progression'

function CompareplayerLayout() {
    return (
        <>
            <Header/>
            <Navbar/>
            <Complayerplayer/>
            <Comparenavbar/>
            <Overall/>
            <Progression/>
            <Footer/>
        </>
    )
}

export default CompareplayerLayout
