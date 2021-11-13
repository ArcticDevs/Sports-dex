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
            <label><HiTrendingUp className={styles.trend} /></label>&nbsp;
            <label>SPORTSAO</label>
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
