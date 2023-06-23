import React, { useEffect, useRef } from 'react';
import {Chart} from 'chart.js/auto';

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartOptions = {
      type: 'bar',
      data: {
        labels: ['2018-19', '2019-20', '2020-21', '2021-22', '2022-23'],
        datasets: [
          {
            label: '# Offers Recieved',
            data: [ 552, 287, 599, 738, 750],
            borderWidth: 1,
            
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        layout: {
            padding: {
              top: 10,
              right: 30,
              
              left: 30,
            },
          },
      },
    };

    if (chartRef && chartRef.current) {
      new Chart(chartRef.current, chartOptions);
    }
  }, []);

  return <canvas ref={chartRef} />;
};

export default BarChart;