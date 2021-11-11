import { HiTrendingUp } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import React from 'react'
import styles from'../styles/header.module.css'
function Header() {
    return (
        <>
          <div className={`nav nav-main py-2 ${styles.bghead}`}>
      <div className="container">
        <div className="row">
          <div className="col-3 d-flex align-items-center">
            <span>
              <HiTrendingUp className={styles.trend} />
            </span>
            &nbsp;
            <span>SPORTS INDEX</span>
          </div>
          <div className="col-8 col-md-6">
            <div className="input-group nav-search">
              <input
                type="text"
                className="form-control"
                placeholder="Search players "
                aria-describedby="basic-addon2"
              />
              <button className="btn btn-primary input-group-text px-4" id="basic-addon2">
                <FiSearch className={styles.icon}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    

        </>
    )
}

export default Header
