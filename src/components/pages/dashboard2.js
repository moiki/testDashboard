import React, { Component } from 'react';
import Highcharts from 'highcharts';
import {
  HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Legend, ColumnSeries, SplineSeries, PieSeries
} from 'react-jsx-highcharts';
// import ExampleCode from '../utils/ExampleCode';
// import code from './exampleCode';

class BarChart extends Component {

  render() {

    return (
      <div className="app">
        <HighchartsChart>
          <Chart />

          <Title>Bar chart</Title>

          <Legend />

          <XAxis categories={['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']} />

          <YAxis>
            <ColumnSeries name="Jane" data={[3, 2, 1, 3, 4]} />
            <ColumnSeries name="John" data={[2, 3, 5, 7, 6]} />
            <ColumnSeries name="Joe" data={[4, 3, 3, 9, 0]} />
            <SplineSeries name="Average" data={[3, 2.67, 3, 6.33, 3.33]} />
          </YAxis>
        </HighchartsChart>

        {/* <ExampleCode name="Combo">{code}</ExampleCode> */}
      </div>
    );
  }
}

export default withHighcharts(BarChart, Highcharts);