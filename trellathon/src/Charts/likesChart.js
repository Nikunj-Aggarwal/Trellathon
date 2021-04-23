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

  export default class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedIndex: null
      };
      this._onSeriesMouseOvers = [
        this._onSeriesMouseOver.bind(this, 0),
        this._onSeriesMouseOver.bind(this, 1)
      ];
    }
  
    _getSeriesColor(index) {
      const {selectedIndex} = this.state;
      if (selectedIndex !== null && selectedIndex !== index) {
        return '#ddd';
      }
      return null;
    }
  
    _onChartMouseLeave = () => {
      this.setState({selectedIndex: null});
    };
  
    _onSeriesMouseOver(selectedIndex) {
      this.setState({selectedIndex});
    }
  
    render() {
      return (
        <div>
          <XYPlot onMouseLeave={this._onChartMouseLeave} width={600} height={300}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title = "Users"/>
            <YAxis title = "Video Views"/>
            <LineSeries
              color={this._getSeriesColor(0)}
              onSeriesMouseOver={this._onSeriesMouseOvers[0]}
              data={[
                {x: 10, y: 15}, 
                {x: 20, y: 8}, 
                {x: 30, y: 5}
              ]}
            />
            <LineSeries
              color={this._getSeriesColor(1)}
              onSeriesMouseOver={this._onSeriesMouseOvers[1]}
              data={[
                  {x: 10, y: 10}, 
                  {x: 20, y: 5}, 
                  {x: 30, y: 15}
              ]}
            />
          </XYPlot>
        </div>
      );
    }
  }

