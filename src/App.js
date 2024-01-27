import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProtectedRoute from "./routes/privateRoute";

import { Provider } from "react-redux";
import { store } from "./store";
import "./App.css";

const theme = createTheme({

});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              {/* <Route path="/" exact element={<Login />} /> */}
              <Route element={<ProtectedRoute isAuthenticated={true} />}>
              </Route>
            </Routes>
          </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
