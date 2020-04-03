import React, { useState } from 'react';
import { setAddress, getAddress, addressIsSet } from '../services/local-storage-service';
import './SetAddress.css'

function SetAddress(props) {

  const [server, setServer] = useState(addressIsSet() ? getAddress() : 'https://somedomain.com:8000')

  const storeAddress = (e) => {
    e.preventDefault();

    setAddress(server);
    props.populateRoutines()
    props.toggleAddressModal()
  }

  return (
    <form onSubmit={(e) => storeAddress(e)}>
      <input onChange={(e) => setServer(e.target.value)} value={server} type='text' id='address' />
      <div className='button-wrapper'>
        {addressIsSet() && <button onClick={props.toggleAddressModal} type='button'>Cancel</button>}
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
}

export default SetAddress;