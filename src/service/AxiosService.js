import axios from 'axios';
import Cookies from 'js-cookie';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api',  /// base url
});

// Function to set the access token
export const setAccessToken = (token) => {
  Cookies.set('accessToken', token, { expires: 7 });
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

// Function to clear the access token
export const clearAccessToken = () => {
  Cookies.remove('accessToken');
  delete axiosInstance.defaults.headers.common['Authorization'];
};

// Intercept request to check and set access token from cookies
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Example function to make a GET request
export const getData = async (endpoint, params = {}) => {
  try {
    const response = await axiosInstance.get(endpoint, { params });
    return response.data;
  } catch (error) {
    return error;
  }
};

// Example function to make a POST request
export const postData = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    return error;
  }
};

export default axiosInstance;
