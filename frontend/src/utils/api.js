const API_BASE_URL = 'http://127.0.0.1:6969'; // Replace with your API base URL

export async function loginUser(credentials) {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  return response.json();
}

export async function signupUser(credentials) {
  const response = await fetch(`${API_BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  return response.json();
}
