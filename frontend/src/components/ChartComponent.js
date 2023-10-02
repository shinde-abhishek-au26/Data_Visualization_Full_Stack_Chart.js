// CHART COMPONENT IS DONE BY USING CHART.JS
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const ChartComponent = ({ data }) => {
  console.log(data, 'data');
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current !== null) {
      chartInstance.current.destroy(); // Destroy the previous chart instance
    }

    const ctx = chartRef.current.getContext('2d');

    if (data.length === 0) {
      const noDataMessage = 'NO DATA!';
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      // Draw a background rectangle
      ctx.fillStyle = '#fff'; // Light gray color
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      ctx.font = '30px Arial';
      ctx.fillStyle = '#555'; // Dark gray color
      ctx.textAlign = 'center';
      ctx.fillText(noDataMessage, ctx.canvas.width / 2, ctx.canvas.height / 2);
      return;
    } else {
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.map((item) =>
            item.sector ? `Sector: ${item.sector}` : '(No Sector Data)'
          ),
          datasets: [
            {
              label: 'Intensity',
              data: data.map((item) => item.intensity),
              backgroundColor: 'green',
              borderColor: 'green',
              borderWidth: 1,
            },
            {
              label: 'Likelihood',
              data: data.map((item) => item.likelihood),
              backgroundColor: 'red',
              borderColor: 'red',
              borderWidth: 1,
            },
            {
              label: 'Relevance',
              data: data.map((item) => item.relevance),
              backgroundColor: 'blue',
              borderColor: 'blue',
              borderWidth: 1,
            },
            {
              label: 'Year',
              data: data.map((item) => item.end_year),
              backgroundColor: 'yellow',
              borderColor: 'yellow',
              borderWidth: 1,
            },
            {
              label: 'Country',
              data: data.map((item) => item.country),
              backgroundColor: 'violet',
              borderColor: 'violet',
              borderWidth: 1,
            },
            {
              label: 'Region',
              data: data.map((item) => item.region),
              backgroundColor: 'cyan',
              borderColor: 'cyan',
              borderWidth: 1,
            },
            {
              label: 'Topics',
              data: data.map((item) => item.topics),
              backgroundColor: 'brown',
              borderColor: 'brown',
              borderWidth: 1,
            },
            {
              label: 'City',
              data: data.map((item) => item.city),
              backgroundColor: 'pink',
              borderColor: 'pink',
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
        },
      });
    }

    // Update the chart to reflect changes
    chartInstance.current.update();

    return () => {
      chartInstance.current.destroy(); // Cleanup when the component is unmounted
    };
  }, [data]);

  return <canvas className="container-chart" ref={chartRef} />;
};

export default ChartComponent;
