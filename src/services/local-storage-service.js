export function setIP(ip) {
  localStorage.setItem('ip', ip)
}

export function getIP() {
  localStorage.getItem('ip')
}

export function ipIsSet() {
  if(!setIP()) {
    return false;
  }
  return true;
}