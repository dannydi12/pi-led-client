import React from 'react';
import DropDown from './DropDown/DropDown';
import Range from './Range/Range';
import { getRoutine, setRoutine, stopRoutine } from './services/api-service';
import { getAddress, setAddress, addressIsSet } from './services/local-storage-service';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    if (!addressIsSet) {
      // trigger modal
    }
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
