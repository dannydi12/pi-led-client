import React from 'react';
import { SketchPicker } from 'react-color';
import DropDown from './DropDown/DropDown';
import { getRoutines, setRoutine, stopRoutine } from './services/api-service';
import { getAddress, addressIsSet } from './services/local-storage-service';
import './App.css';

class App extends React.Component {

  state = {
    showAddressModal: false,
    allRoutines: [],
    routineSettings: {
      routineName: 'Show Off',
      color: {
        r: 105,
        g: 57,
        b: 214,
      },
      delay: null,
      brightness: undefined,
    },
  }

  componentDidMount() {
    if (!addressIsSet()) {
      this.setState({
        showAddressModal: true
      })
    }

    if (addressIsSet()) {
      getRoutines(this.addRoutines)
    }
  }

  addRoutines = (allRoutines) => {
    this.setState({
      allRoutines
    })
  }

  getCurrentRoutine = () => {
    return this.state.allRoutines.find(routine => routine.name === this.state.routineSettings.routineName)
  }

  changeName = (newName) => {
    this.setState({
      routineSettings: {
        ...this.state.routineSettings,
        delay: null,
        routineName: newName
      }
    })
  }

  handleColorChange = (color, event) => {
    this.setState({
      routineSettings: {
        ...this.state.routineSettings,
        color: {
          r: color.rgb.r,
          g: color.rgb.g,
          b: color.rgb.b
        }
      }
    })
  };

  handleDelayChange = (delay) => {
    this.setState({
      routineSettings: {
        ...this.state.routineSettings,
        delay,
      }
    })
  }

  handleBrightnessChange = (brightness) => {
    this.setState({
      routineSettings: {
        ...this.state.routineSettings,
        brightness,
      }
    })
  }

  render() {
    return (
      <main>
        <header>
          <h1>Light Control</h1>
        </header>
        <form>
          <DropDown routines={this.state.allRoutines} changeName={this.changeName} />
          {
            this.state.allRoutines.length > 1 &&
            <p>{this.getCurrentRoutine().description}</p>
          }
          {
            this.state.allRoutines.length > 1 && this.getCurrentRoutine().customOptions.find(option => option === 'color') &&
            <SketchPicker
              color={this.state.routineSettings.color}
              onChangeComplete={this.handleColorChange}
            />
          }
          {
            this.state.allRoutines.length > 1 && this.getCurrentRoutine().customOptions.find(option => option === 'delay') &&
            <input type="range" min="1" max="10000" defaultValue={1000} onChange={(e) => this.handleDelayChange(e.target.value)} className="slider" id="delay" />
          }
          {
            this.state.allRoutines.length > 1 && this.getCurrentRoutine().customOptions.find(option => option === 'brightness') &&
            <input type="range" min="1" max="255" defaultValue={200} onChange={(e) => this.handleBrightnessChange(e.target.value)} className="slider" id="brightness" />
          }

        </form>
      </main>
    );
  }
}

export default App;
