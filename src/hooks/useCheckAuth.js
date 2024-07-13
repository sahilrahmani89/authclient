import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const useCheckAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (token) {
      setIsAuthenticated(true);
      // You can also decode the token to get user info if you stored it in the token
      // For example, using jwt-decode library to decode the token:
      // const decodedToken = jwtDecode(token);
      // setUser(decodedToken.user);
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  }, []);

  return { isAuthenticated, user };
};

export default useCheckAuth;
