import React, { Component } from 'react';
import ProgressBar from './components/ProgressBar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: 0
    };

    this.updateProgress = this.updateProgress.bind(this);
  }

  updateProgress() {
    if (this.state.percentage === 100) {
      this.setState({ percentage: 0 });
      return;
    }
    this.setState({ percentage: this.state.percentage + 10 });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-header">Let's track our progress!</h1>

        <ProgressBar percentage={this.state.percentage} />

        <h3>Currently: {this.state.percentage}%</h3>

        <div>
          <button onClick={this.updateProgress}>Update progress</button>
        </div>
      </div>
    );
  }
}

export default App;
