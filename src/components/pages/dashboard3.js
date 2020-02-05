import React, { Component } from 'react';
import Highcharts from 'highcharts';
import {
  HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Legend, ColumnSeries, SplineSeries, PieSeries
} from 'react-jsx-highcharts';
// import ExampleCode from '../utils/ExampleCode';
// import code from './exampleCode';

class PieChart extends Component {

  render() {
    const pieData = [{
      name: 'Jane',
      y: 13
    }, {
      name: 'John',
      y: 23
    }, {
      name: 'Joe',
      y: 19
    }];

    return (
      <div className="app">
        <HighchartsChart>
          <Chart />

          <Title>Pie charts</Title>

          <Legend />
          <PieSeries name="Total consumption" data={pieData} center={[100, 100]} size={200} showInLegend={false} />

        </HighchartsChart>

        {/* <ExampleCode name="Combo">{code}</ExampleCode> */}
      </div>
    );
  }
}

export default withHighcharts(PieChart, Highcharts);