const ProtectedRoute = ({
  isAuthenticated = false,
  redirectPath = "/",
  children,
}) => {
  if (isAuthenticated) {
    return { children };
  } else {
    console.log("Not Authenticated");
  }
};

export default ProtectedRoute;
