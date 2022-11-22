import React from "react";
import Chartbar from "./Chartbar";
import "./Chart.css";

function Chart(props) {

  // map method to return an array of 12 values from the dataPoint object
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  // Use spread operator to pull out all the values and add them as standalone arguments to the Math.max method
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <Chartbar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
