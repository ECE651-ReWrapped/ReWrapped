import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

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
