import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./routes/privateRoute";
import Signup from "./components/Signup";
import { ErrorPage } from "./pages/ErrorPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login />,
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
