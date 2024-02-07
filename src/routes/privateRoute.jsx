import { Navigate } from "react-router-dom";
const ProtectedRoute = ({
  isAuthenticated = false,
  redirectPath = "/",
  children,
}) => {
  return isAuthenticated ? children : <Navigate to={redirectPath} />;
};

export default ProtectedRoute;
