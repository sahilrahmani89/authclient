import { useState,useEffect } from "react";
import { postData, setAccessToken, clearAccessToken } from "../service/AxiosService";
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";


const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading,setisLoading] = useState(true)
  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      // Replace with your login API endpoint
      const response = await postData('/auth/login', credentials);
      // console.log('response', response);
      const data = await response?.data;
      const { accessToken, ...user } = data;

      // Set the access token for future requests
      // console.log('accesstoken', accessToken);
      if (accessToken) {
        // console.log('Logged in');
        setAccessToken(accessToken);
        // Update state to indicate the user is authenticated
        setIsAuthenticated(true);
        setUser(user);
        setTimeout(() => {
          navigate('/profile');
        }, 1000);
      }
    } catch (error) {
      console.error('Login failed:', error);
      return error.message;
    }
  };

  const logout = async() => {
    await postData('/auth/logout')
     await clearAccessToken()
    // Clear the access token
    // Update state to indicate the user is not authenticated
    setIsAuthenticated(false);
    setUser(null);
  };
  useEffect(() => {
    setisLoading(true)
    const token = Cookies.get("accessToken");
    if (token) {
      setIsAuthenticated(true);
      // You can also decode the token to get user info if you stored it in the token
      // For example, using jwt-decode library to decode the token:
      // const decodedToken = jwtDecode(token);
      // setUser(decodedToken.user);
      setisLoading(false)
    } else {
      setIsAuthenticated(false);
      setUser(null);
      setisLoading(false)
    }
  }, [logout]);
  
  return {
    isAuthenticated,
    user,
    login,
    logout,
    isLoading,
  };
}

export default useAuth;
