import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from'../styles/header.module.css'
function Header() {
    return (
        <>
          <div className={styles.container}>
            <div className={styles.logo}>
            SportsAO   
            </div> 
            <div className={styles.search}>
              <input className={styles.input} placeholder="Search players or Teams"></input>
              <button className={styles.btn}>
                <FontAwesomeIcon className={styles.icon} icon={faSearch}/>
              </button>
            </div>
          </div> 

        </>
    )
}

export default Header
