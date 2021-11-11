
import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'
function navbar() {
    return (
        <>
            <div className="nav-menu">
                <div className="container">
                    <div className="row nav-menu-option">
                        <ul>
                        <li><Link to={{pathname:"/"}} className="link">PLAYERS</Link></li>
                            <li><Link to={{pathname:"/compareplayer"}} className="link">COMPARE PLAYERS</Link></li>
                            <li>TEAMS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default navbar
