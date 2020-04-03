import React from 'react';
import { SketchPicker } from 'react-color';
import DropDown from './DropDown/DropDown';
import { getRoutines, setRoutine, stopRoutine } from './services/api-service';
import { addressIsSet } from './services/local-storage-service';
import SetAddress from './SetAddress/SetAddress';
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
      this.toggleAddressModal()
    }

    if (addressIsSet()) {
      this.populateRoutines()
    }
  }

  populateRoutines = () => {
    getRoutines(this.addRoutines)
  }

  addRoutines = (allRoutines) => {
    this.setState({
      allRoutines
    })
  }

  getCurrentRoutine = () => {
    return this.state.allRoutines.find(routine => routine.name === this.state.routineSettings.routineName)
  }

  toggleAddressModal = () => {
    this.setState({
      showAddressModal: !this.state.showAddressModal
    })
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
    }, () => setRoutine(this.state.routineSettings))
  };

  handleSettingChange = (setting, value) => {
    this.setState({
      routineSettings: {
        ...this.state.routineSettings,
        [setting]: value,
      }
    })
  }

  render() {
    return (
      <main>
        <form id='controller' onSubmit={(e) => {
          e.preventDefault();
          setRoutine(this.state.routineSettings)
        }}>
          <DropDown routines={this.state.allRoutines} changeName={this.changeName} />
          {
            this.state.allRoutines.length > 1 &&
            <>
              <p>{this.getCurrentRoutine().description}</p>
              {
                this.getCurrentRoutine().customOptions.find(option => option === 'color') &&
                <SketchPicker
                  color={this.state.routineSettings.color}
                  onChangeComplete={this.handleColorChange}
                  aria-label='color'
                />
              }

              <div className='slider-container'>
                {
                  this.getCurrentRoutine().customOptions.find(option => option === 'delay') &&
                  <input
                    type='range'
                    min='1'
                    max='1000'
                    defaultValue={1000}
                    onChange={(e) => this.handleSettingChange('delay', e.target.value)}
                    className='slider'
                    id='delay'
                    aria-label='delay' />
                }
                {
                  this.getCurrentRoutine().customOptions.find(option => option === 'brightness') &&
                  <input
                    type='range'
                    min='1'
                    max='255'
                    defaultValue={200}
                    onChange={(e) => this.handleSettingChange('brightness', e.target.value)}
                    className='slider'
                    id="brightness"
                    aria-label='brightness' />
                }
              </div>
            </>
          }
          <div className='button-wrapper'>
            <button type='button' onClick={stopRoutine}>Stop</button>
            <button type='submit'>Start</button>
          </div>
        </form>
        {this.state.showAddressModal && <SetAddress toggleAddressModal={this.toggleAddressModal} populateRoutines={this.populateRoutines} />}
        {!this.state.showAddressModal && <button className='settings-button' onClick={this.toggleAddressModal} aria-label='settings'></button>}
      </main>
    );
  }
}

export default App;
