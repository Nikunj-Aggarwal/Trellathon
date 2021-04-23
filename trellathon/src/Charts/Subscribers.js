import React from 'react'
import "../../node_modules/react-vis/dist/style.css"
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    LineSeries
  } from "react-vis";

  export default function AxisOn0({
    xDomain = [0, 7],
    yDomain = [-5, 15],
    xAxisOn0 = true,
    yAxisOn0 = true,
    verticalTickValues = [],
    horizontalTickValues = [0]
  }) {
    return (
      <XYPlot width={500} height={300} {...{xDomain, yDomain}}>
        {!verticalTickValues || verticalTickValues.length ? (
          <VerticalGridLines tickValues={verticalTickValues} />
        ) : null}
        {!horizontalTickValues || horizontalTickValues.length ? (
          <HorizontalGridLines tickValues={horizontalTickValues} />
        ) : null}
        <XAxis on0={xAxisOn0} title="Days"/>
        <YAxis on0={yAxisOn0} title="Subscribers Gained"/>
        <LineSeries
          data={[
            {x: 0, y: 5},
            {x: 1, y: 3},
            {x: 2, y: -5},
            {x: 3, y: 15},
            {x: 4, y: 12},
            {x :5, y: 7},
            {x :6, y: 14}
          ]}
        />
      </XYPlot>
    );
  }
