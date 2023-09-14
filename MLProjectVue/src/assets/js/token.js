import axios from "axios";

let apiUrl = "";
apiUrl = import.meta.env.VITE_APP_BASE_API;

var location = window.location.href;
if (location.match(/-dev/)) {
  apiUrl = "https://material-platformapi.azurewebsites.net";
} else {
  apiUrl = import.meta.env.VITE_APP_BASE_API;
}

// api
const apiRequest = axios.create({
    baseURL: `${apiUrl}`,
});

export const getToken = async () => {
  const username = 'melung';
  const password = 'WyzdgWLWNhpEBwRj6Cja';

  try {
    const response = await apiRequest.post("/connect/token", {
      username,
      password,
      client_id: 'app',
      client_secret: '7EE73AB3-3BBC-4821-B799-7AB5E97CD371',
      grant_type: 'password',
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    });

    const token = response.data.access_token;
    localStorage.setItem('token', token);
    return token;
  } catch (error) {
    throw error;
  }
};