import React from "react";
import Chart from "react-apexcharts";
import "./chart.css";
const MainChart = (props) => {
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };
  const series = [
    {
      name: "series-1",
      data: [50, 71, 63, 50, 49, 60, 70, 91],
    },
  ];

  return (
    <>
      <div className="main_chart mb-4 shadow rounded text-mute">
        <div className="card-header bg-body">your acount balance </div>
        <div className="card-body">
          <Chart
            options={options}
            series={series}
            type="line"
            width="100%"
            height="309"
          />
        </div>
      </div>
    </>
  );
};

export default MainChart;
