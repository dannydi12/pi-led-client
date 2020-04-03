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
      routineName: null,
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

  handleColorChange = (color, event) => {
    console.log('called')
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

  render() {
    return (
      <main>
        <header>
          <h1>Light Control</h1>
        </header>

        <form>
          <SketchPicker
            color={this.state.routineSettings.color}
            onChangeComplete={this.handleColorChange}
          />
          <DropDown />
          <Range />
        </form>
      </main>
    );
  }
}

export default App;
