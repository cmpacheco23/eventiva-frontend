//this makes an API call to the python backend

const BACKEND_API_URL = 'http://127.0.0.1:8000/myapi/api/';

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BACKEND_API_URL}${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API ERROR:', error);
    throw error;
  }
};
