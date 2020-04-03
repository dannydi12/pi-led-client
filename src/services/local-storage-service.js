export function setAddress(address) {
  return localStorage.setItem('address', address)
}

export function getAddress() {
  return localStorage.getItem('address')
}

export function addressIsSet() {
  if(!getAddress()) {
    return false;
  }
  return true;
}