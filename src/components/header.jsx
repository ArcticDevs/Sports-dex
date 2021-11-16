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
        
          <div className="col-4 col-sm-4 d-flex align-items-center">
            <span className={styles.trend}><HiTrendingUp  /></span>&nbsp;
            <div className={styles.logo}>SPORTSAO</div>
          </div>
          <div className="col-8 col-sm-6  col-md-6">
            <div className="input-group">
              <input className="form-control" placeholder="Search Player"></input>
              <button className="btn btn-primary ">
                <FiSearch />
              </button>
            </div>
          </div>
        </div>
        </div>
        </div>
      </>
    );
}

export default Header
