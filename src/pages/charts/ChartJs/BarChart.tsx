import React from "react";
import { Bar, defaults as ChartjsDefaults } from "react-chartjs-2";
import { Card } from "react-bootstrap";

const BarChart = () => {
  // changing chartjs defaults
  ChartjsDefaults.color = "#8391a2";
  ChartjsDefaults.scale.grid.color = "#8391a2";

  // chart data
  const barChartData = (canvas: any) => {
    const ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(0, 500, 0, 150);
    gradientStroke.addColorStop(0, "#fa5c7c");
    gradientStroke.addColorStop(1, "#727cf5");

    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Sales Analytics",
          backgroundColor: gradientStroke,
          borderColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          hoverBorderColor: gradientStroke,
          data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81],
          barPercentage: 0.7,
          categoryPercentage: 0.5,
        },
        {
          label: "Dollar Rate",
          backgroundColor: "#e3eaef",
          borderColor: "#e3eaef",
          hoverBackgroundColor: "#e3eaef",
          hoverBorderColor: "#e3eaef",
          data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59],
          barPercentage: 0.7,
          categoryPercentage: 0.5,
        },
      ],
    };
  };

  // options
  const barChartOpts = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#727cf5",
        titleFontColor: "#fff",
        bodyFontColor: "#fff",
        bodyFontSize: 14,
        displayColors: false,
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
          color: "rgba(0,0,0,0.05)",
        },
        stacked: false,
        ticks: {
          stepSize: 20,
        },
      },
      x: {
        stacked: false,
        grid: {
          color: "rgba(0,0,0,0.05)",
        },
      },
    },
  };

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title mb-3">Bar Chart</h4>

        <div style={{ height: "320px" }} className="chartjs-chart">
          <Bar data={barChartData} options={barChartOpts} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default BarChart;
