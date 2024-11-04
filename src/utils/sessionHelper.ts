export function checkToken() {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    return false;
  }
  return true;
}
