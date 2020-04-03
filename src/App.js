import React from 'react';
import { SketchPicker } from 'react-color';
import DropDown from './DropDown/DropDown';
import Range from './Range/Range';
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
      brightness: null,
    }
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

  changeName = (newName) => {
    this.setState({
      routineSettings: {
        ...this.state.routineSettings,
        routineName: newName
      }
    })
  }

  handleColorChange = (color, event) => {
    this.setState({
      routineSettings: {
        ...this.state.routineSettings,
        delay: null,
        color: {
          r: color.rgb.r,
          g: color.rgb.g,
          b: color.rgb.b
        }
      }
    })
  };

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
            <p>{this.state.allRoutines.find(routine => routine.name === this.state.routineSettings.routineName).description}</p>
          }
          <SketchPicker
            color={this.state.routineSettings.color}
            onChangeComplete={this.handleColorChange}
          />
          <Range />
        </form>
      </main>
    );
  }
}

export default App;
