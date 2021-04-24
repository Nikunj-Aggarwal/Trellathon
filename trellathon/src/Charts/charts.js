import React from 'react'
import "../../node_modules/react-vis/dist/style.css"
import {
    XYPlot,
    LineSeries,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
  } from "react-vis";

const charts = () => {
    const data = [
        { x: 900, y: 1.2 },
        { x: 800, y: 1.4 },
        { x: 700, y: 2.0 },
        { x: 600, y: 2.3 },
        { x: 500, y: 2.35 },
        { x: 400, y: 2.25 },
        { x: 300, y: 2.8 },
        { x: 200, y: 3 },
        { x: 100, y: 2.73 },
      ];
    return (
        <div style={{ marginTop: "15px",
        marginLeft : "50px" }}>
      <XYPlot height={300} width={500}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="Viewers"/>
        <YAxis title ="Watchtime"/>
        <LineSeries data={data} color="red" />
        <LineSeries data={data} color="purple" />
        <LineSeries data={data} color="yellow" />
      </XYPlot>
    </div>
    )
}

export default charts
