import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import { createTestStore } from "../store/TestStore";
import { Provider } from "react-redux";

describe("Home Component Tests", () => {
  //Redner the component within the BrowswerRouter to support the Outlet component
  const renderComponent = () =>
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

  test("render the Spotify and Rewrapped texts correctly", () => {
    renderComponent();

    //Check for specific Text
    expect(screen.getByText("Spotify")).toBeInTheDocument();
    expect(screen.getByText("ReWrapped.")).toBeInTheDocument();

    //Check for Styles
    const spotifyText = screen.getByText("Spotify");
    expect(spotifyText).toHaveStyle("color: #1DB954");
    expect(spotifyText).toHaveStyle("fontStyle: italic");
  });
});

//Dealing with the Outlets
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />}>
      <Route index element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  </Routes>
);

describe("App routing tests", () => {
  test("renders Login component for the base route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

  test("render singup component for /signup", () => {
    const testStore = createTestStore();
    render(
      <Provider store={testStore}>
        <MemoryRouter initialEntries={["/signup"]}>
          <AppRoutes />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole("button", { name: /Sign up/i })
    ).toBeInTheDocument();
  });
});
