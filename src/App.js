import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Chart from './Chart';
import BarChart from './BarChart';
import LineChart from './LineChart';
import LineChart2 from './LineChart2';
import AreaChart from './AreaChart';
import AreaChart2 from './AreaChart2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Hello greeting="Bonjour" name="Simon" /> and <Hello greeting="Ciao" name="Rach" />
        </p>
        <p>
          <Chart 
            data={[5, 10, 3, 13, 5, 10, 1, 23, 15, 10]} 
            width="200" 
            height="100" />
        </p>
        <p>
          <BarChart 
            data={[5, 10, 3, 13, 5, 10, 1, 23, 15, 10]} 
            width="200" 
            height="100" />
        </p>        
        <p>
          <AreaChart
            data={[[0, 20], [100, 98], [200, 50]]} 
            width="200" 
            height="100" />
        </p>        
        <p>
          <AreaChart2
            data={[{x: 0, y: 20}, {x: 100, y: 98}, {x: 200, y: 50}]} 
            width="200" 
            height="100" />
        </p>
        <p>
          <LineChart
            data={[{x: 0, y: 20}, {x: 100, y: 98}, {x: 200, y: 50}]} 
            width="200" 
            height="100" />
        </p>
        <p>
          <LineChart2
            data={[[0, 20], [100, 98], [200, 50]]} 
            width="200" 
            height="100" />
        </p>
      </div>
    );
  }
}

export default App;
