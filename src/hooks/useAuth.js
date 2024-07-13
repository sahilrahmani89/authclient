import React, { useState } from "react";
import { postData, setAccessToken, clearAccessToken } from "../service/AxiosService";
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      // Replace with your login API endpoint
      const response = await postData('/auth/login', credentials);
      console.log('response', response);
      const data = await response?.data;
      const { accessToken, ...user } = data;

      // Set the access token for future requests
      console.log('accesstoken', accessToken);
      if (accessToken) {
        console.log('Logged in');
        setAccessToken(accessToken);
        // Update state to indicate the user is authenticated
        setIsAuthenticated(true);
        setUser(user);
        setTimeout(() => {
          navigate('/');
        }, 1000);
      }
    } catch (error) {
      console.error('Login failed:', error);
      return error.message;
    }
  };

  const logout = () => {
    // Clear the access token
    clearAccessToken();

    // Update state to indicate the user is not authenticated
    setIsAuthenticated(false);
    setUser(null);
  };

  console.log('isAuthenticated', isAuthenticated);
  return {
    isAuthenticated,
    user,
    login,
    logout,
  };
}

export default useAuth;
