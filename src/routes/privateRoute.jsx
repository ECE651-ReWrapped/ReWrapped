import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ redirectPath = "/", children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_LOCAL}/verifyToken`,
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(res.data.auth);
      } catch (err) {
        console.error(err);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    verifyToken();
  }, []);

  if (isLoading) {
    //Add Loading Spinner component
    return null;
  }

  return isAuthenticated ? children : <Navigate to={redirectPath} />;
};

export default ProtectedRoute;
