import React, { Component } from 'react';
import RectangleShape from './components/rectangleShape';
import CircleShape from './components/circleShape';
// import BarGraph from './graphs/barGraph';
// import PieChart from './graphs/pieChart';
import GraphImages from './graphs/graphImages';
// import GraphJson from './graphs/graphJson';

class App extends Component {
  render() {
    return (
      <div>
          <RectangleShape /><br />
          <CircleShape /><br />
          <GraphImages />
          {/* <GraphJson /> */}
      </div>
    );
  }
}

export default App;
