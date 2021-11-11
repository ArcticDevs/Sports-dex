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
                    height="350"
                    series={[
                      {
                        name: "C1",
                        data: [28, 29, 33, 36, 32, 32, 33],
                        color: "#0d25d6",
                      },
                      {
                        name: "C2",
                        data: [12, 11, 14, 18, 17, 13, 13],
                        color: "#ff0000",
                      },
                    ]}
                    options={{
                      xaxis: {
                        tickPlacement: "on",
                        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                      },
                      chart: {
                        stacked: true,
                      },
                      dataLabels: {
                        enabled: true,
                      },
                      stroke: {
                        curve: "smooth",
                      },
                      tooltip: {
                        followCursor: true,
                      },
          
                      // legend: {
                      //   position: "top",
                      //   horizontalAlign: "right",
                      //   floating: true,
                      //   offsetY: -25,
                      //   offsetX: -5,
                      // },
                    }}
                />
                </div>
                </div>
            </div> 
        </>
    )
}

export default Progression
