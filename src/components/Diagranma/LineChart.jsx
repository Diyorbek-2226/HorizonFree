import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart = () => {
  const data = {
    labels: ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [30, 50, 100, 70, 60, 80],
        borderColor: '#8E24AA',
        backgroundColor: 'rgba(142, 36, 170, 0.1)',
        fill: true,
      },
      {
        label: 'Dataset 2',
        data: [50, 60, 80, 90, 100, 120],
        borderColor: '#00ACC1',
        backgroundColor: 'rgba(0, 172, 193, 0.1)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
        },
      },
    },
  };

  return (
    <div className="line-chart">

      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
