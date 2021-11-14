import React from 'react'
import Apexchart from 'react-apexcharts';
import styles from '../../styles/chart.module.css'
function Progression() {
    return (
        <>
           <div className="container mt-5 mb-5">
                <div className={styles.container}>
                <div className="row">
                <Apexchart
                    type="line"
                    height={500}
                    series={[
                      {
                        name: "3 PT",
                        data: [28, 29, 33, 36, 32, 32, 33, 26,9,19,13,28,39,16,26,22,24,18,9,8,12,17,20],
                        color: "#3E8AE4",
                      },
                      {
                        name: "2 PT",
                        data: [12, 11, 14, 18, 17, 13, 13,34,21,20,29,8,6,16,25,30,24,18,15,28],
                        color: "#EF950D",
                      },
                      {
                        name: "FT",
                        data: [12, 11, 14, 18, 17, 13, 13, 6,27,3,20,19,30,26,17,26,20,29,26,18],
                        color: "#FFC903",
                      },
                    ]}
                    options={{
                      xaxis: {
                        tickPlacement: "on",
                        categories: ["2002-03", "2003-04", "2004-05", "2005-06", "2006-07", "2007-08", "2008-09", "2009-10", "2010-11", "2011-12", "2012-13", "2013-14", "2014-15", "2015-16", "2016-17", "2017-18", "2018-19", "2019-20", "2020-21", "2021-21"],
                      },
                      chart: {
                        stacked: true,
                      },
                      stroke: {
                        width: 1,
                        curve: "smooth",
                      },
                      tooltip: {
                        followCursor: true,
                      },
                      markers: {
                        size: 5,
                        shape: "circle",
                      },
                      responsive: [
                        {
                          breakpoint: 480,
                          options: {
                            legend: {
                              position: "bottom",
                              offsetX: -10,
                              offsetY: 0,
                            },
                          },
                        },
                      ],
                    }}
                />
                </div>
                </div>
            </div> 
        </>
    )
}

export default Progression
