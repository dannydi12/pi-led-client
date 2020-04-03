import { getAddress } from './local-storage-service';

function objectToQueryString(obj) {
  const queries = Object.keys(obj).map(key => {
    if (obj[key] !== null) {
      return key + '=' + obj[key]
    }
    return '';
  });

  return queries.join('&');
}

export function getRoutines(addToState) {
  return fetch(`${getAddress()}/routines`, {
    method: 'GET',
    headers: {
      'Authorization': process.env.REACT_APP_API_KEY
    }
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(res)
      }
      return res.json()
    })
    .then(res => addToState(res))
    .catch(err => {
      console.log(err);
    })
}

export function setRoutine(routine) {
  const settings = {
    name: encodeURI(routine.name),
    colorType: 'rgb',
    r: routine.color.r,
    g: routine.color.g,
    b: routine.color.b,
    delay: routine.delay,
    brightness: routine.brightness
  }

  return fetch(`${getAddress()}/routines?${objectToQueryString(settings)}`, {
    method: 'PUT',
    headers: {
      'Authorization': process.env.REACT_APP_API_KEY,
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(res)
      }
      return res.json()
    })
    .catch(err => {
      console.log(err);
    })
}

export function stopRoutine() {
  return fetch(`${getAddress()}/kill`, {
    method: 'DELETE',
    headers: {
      'Authorization': process.env.REACT_APP_API_KEY
    }
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(res)
      }
      return res;
    })
    .catch(err => {
      console.log(err);
    })
}