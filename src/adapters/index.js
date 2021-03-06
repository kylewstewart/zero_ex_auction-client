const baseURL = 'http://localhost:3000/api/v1';

const headers = () => ({
  'content-type': 'application/json',
  accept: 'application/json',
  Authorization: localStorage.getItem('token'),
});

export const auth = (username, password) => (
  fetch(`${baseURL}/auth`, {
    method: 'post',
    headers: headers(),
    body: JSON.stringify({ username, password }),
  }).then(response => response.json())
);

export const currentUser = () => (
  fetch(`${baseURL}/current_user`, {
    headers: headers(),
  }).then(response => response.json())
);
