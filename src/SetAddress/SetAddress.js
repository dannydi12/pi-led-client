import React, { useState } from 'react';
import { setAddress } from '../services/local-storage-service';
import './SetAddress.css'

function SetAddress(props) {

  const [server, setServer] = useState(null)

  const storeAddress = (e) => {
    e.preventDefault();

    setAddress(server);
    props.populateRoutines()
    props.toggleAddressModal()
  }

  return (
    <form onSubmit={(e) => storeAddress(e)}>
      <input onChange={(e) => setServer(e.target.value)} type='text' id='address' />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default SetAddress;