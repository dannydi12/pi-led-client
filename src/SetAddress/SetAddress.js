import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { setAddress, getAddress, addressIsSet } from '../services/local-storage-service';
import './SetAddress.css';

function SetAddress(props) {
  const [server, setServer] = useState(addressIsSet() ? getAddress() : 'https://somedomain.com:8000');

  const storeAddress = (e) => {
    e.preventDefault();

    setAddress(server);
    props.populateRoutines();
    props.toggleAddressModal();
  };

  return (
    <div className="set-address">
      <form onSubmit={(e) => storeAddress(e)}>
        <p>
          Hey there, just before the fun begins,
          please enter the server IP (including the port) or domain name.
        </p>
        <label htmlFor="address">
          Address
          <input onChange={(e) => setServer(e.target.value.toLowerCase())} value={server} type="text" id="address" />
        </label>
        <div className="button-wrapper">
          {addressIsSet() && <button onClick={props.toggleAddressModal} type="button">Cancel</button>}
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

SetAddress.propTypes = {
  toggleAddressModal: PropTypes.func.isRequired,
  populateRoutines: PropTypes.func.isRequired,
};

export default SetAddress;
