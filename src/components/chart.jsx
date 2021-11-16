import React from 'react'
import Apexchart from 'react-apexcharts'
import styles from '../styles/chart.module.css'
import Upper from './upper'
function Chart() {
    return (
        <>
                <Apexchart
                    type="bar"
                    width={900}
                    height={500}
                    series={[
                      {
                        name: "3 PT",
                        data: [
                          100, 150, 50, 75, 67, 124, 233, 322, 343, 284, 392, 412, 23, 387,
                          298, 193, 183, 293, 128, 395, 376, 423,
                        ],
                        color: "#3E8AE4",
                      },
                      {
                        name: "2 PT",
                        data: [
                          90,
                          110,
                          60,
                          85,
                          79,
                          300,
                          112,
                          33,
                          434,
                          425,
                          125,
                          62,
                          326,
                          217,
                          23,
                          223,
                          232,
                          ,
                          424,
                          500,
                          501,
                          234,
                        ],
                        color: "#EF950D",
                      },
                      {
                        name: "FT",
                        data: [
                          105, 65, 68, 76, 72, 189, 203, 129, 328, 515, 626, 272, 123, 33,
                          243, 81, 426, 111, 126, 234, 425, 111,
                        ],
                        color: "#FFC903",
                      },
                    ]}
                    options={{
                      xaxis: {
                        tickPlacement: "on",
                        categories: [
                          "MIA",
                          "CLE",
                          "BOS",
                          "NYK",
                          "BRO",
                          "LAL",
                          "BOS",
                          "CHI",
                          "GEC",
                          "KEN",
                          "CLE",
                          "HUS",
                          "BOS",
                          "NYK",
                          "BRO",
                          "LAL",
                          "BOS",
                          "CHI",
                          "GEC",
                          "KEN",
                          "CLE",
                          "HUS",
                        ],
                      },
                      chart: {
                        stacked: true,
                      },
                      tooltip: {
                        followCursor: true,
                      },
                      plotOptions: {
                        bar: {
                          horizontal: false,
                          vertical: false,
                          borderRadius: 5,
                        },
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
        </>
    )
}

export default Chart
