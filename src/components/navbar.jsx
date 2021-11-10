
import React from 'react'
import '../styles/navbar.css'
function navbar() {
    return (
        <>
            <div className="nav-menu">
                <div className="container">
                    <div className="row nav-menu-option">
                        <ul>
                            <li className="active">PLAYERS</li>
                            <li>TEAMS</li>
                            <li>LEADERBOARD</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default navbar
