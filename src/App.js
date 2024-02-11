import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./routes/privateRoute";
import Signup from "./containers/Signup";
import Home from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";
import Login from "./containers/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";

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
      <ProtectedRoute isAuthenticated={true}>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
