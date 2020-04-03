import React from 'react';
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
        r: 0,
        g: 0,
        b: 0,
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

    if(addressIsSet()) {
      getRoutines(this.addRoutines)
    }
  }

  addRoutines = (allRoutines) => {
    this.setState({
      allRoutines
    })
  }

  render() {
    return (
      <main>
        <header>
          <h1>Light Control</h1>
        </header>

        <form>
          <DropDown />
          <Range />
        </form>
      </main>
    );
  }
}

export default App;
