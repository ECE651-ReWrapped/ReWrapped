import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./routes/privateRoute";
import Signup from "./containers/Signup";
import Home from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";
import Login from "./containers/Login";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reset-password",
    element: <ForgotPassword />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
