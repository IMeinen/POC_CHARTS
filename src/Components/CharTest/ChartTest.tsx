import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {ChartContainer} from './styles';

const ChartTest = () => {
    const [chartData, setChartData] = useState({
        labels: ['Preço A','Preço B'],
        datasets: [
            {
                label: "",
                data: ['31','12'],
                backgroundColor:    ['rgba(28,179,187,1)',
                'rgb(241,97,34)',
                ]
              
            }
        ]
    });
    

   

    return (
        <ChartContainer>
            <h1> ChartTest</h1>
           
                <Bar
                    data={chartData}
                   
                    options={{
                        legend: {
                            display: false
                        },
                        responsive: true,
                        title: { text: "Teste Preços", display: false },
                        scales: {
                           
                            yAxes: [
                                {
                                    ticks: {
                                        autoSkip: true,
                                        maxTicksLimit: 20,
                                        beginAtZero: true,
                                        padding: 0,
                                    },
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ],
                            xAxes: [
                                {   barPercentage: 0.4,
                                    barThickness: 60,
                                    
                                    ticks: {
                                        autoSkip: false,
                                        
                                      },
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ]
                        }
                    }}
                />
            
        </ChartContainer>
    );
};

export default ChartTest;