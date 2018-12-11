import React, { Component } from 'react';
import {PieChart, BarChart, LineChart, AreaChart} from "react-easy-chart";
import axios from 'axios';

class GraphImages extends Component {
    state = { 
          pieChartItems:[],
          barChartItems:[],
          lineChartItems:[],
          arecChartItems:[]
     }

     componentDidMount() {
        axios.get('db.json')
        .then(response => 
            this.setState({
            barChartItems:response.data.barChart,
            pieChartItems: response.data.pieChart,
            lineChartItems:response.data.lineChart,
            arecChartItems:response.data.areaChart
        })
        )
        .catch( (error)=> {
        console.log(error);
      });
     }

    render() { 
        return ( 
            <div>
                <h2>PieChart</h2>
                <PieChart
                    data={this.state.pieChartItems}
                    size={300}
                />
                <br/>
                <h2>BarChart</h2>
                <BarChart
                    data={this.state.barChartItems}
                    height={200}
                    width={350}
                     colorBars
                     axes
                    style={{color:'black'}}
                /><br />
                <h2>LineChart</h2>
                <LineChart
                    xType={'text'}
                    axes
                    interpolate={'cardinal'}
                    width={750}
                    height={250}
                    data={this.state.lineChartItems}
                /><br />
                <h2>AreaChart</h2>
                <AreaChart
                    xType={'text'}
                    axes
                    width={450}
                    height={300}
                    interpolate={'cardinal'}
                    data={this.state.arecChartItems}
                />
            </div>
         );
    }
}
 
export default GraphImages;








