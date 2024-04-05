import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ResponsiveAppBar from "../components/appBar"; // Replace 'AppBar' with the actual name of your component

describe("AppBar component", () => {
  it("renders correctly", () => {
    render(
      <Router>
        <ResponsiveAppBar />
      </Router>
    );

    // Check if certain elements are rendered
    expect(screen.getByText("S.R")).toBeInTheDocument(); // Check for the 'SR' text
    expect(
      screen.getByLabelText("account of current user")
    ).toBeInTheDocument(); // Check for the user account icon
  });

  it("opens the navigation menu when the menu icon is clicked", () => {
    render(
      <Router>
        <ResponsiveAppBar />
      </Router>
    );

    // Assuming MenuIcon opens a menu with text 'Create Playlist'
    fireEvent.click(screen.getByLabelText("account of current user"));
    expect(screen.getByText("Profile")).toBeInTheDocument(); // Verifying the menu contains 'Profile' option
  });

  it("opens the user menu when the avatar is clicked", () => {
    render(
      <Router>
        <ResponsiveAppBar />
      </Router>
    );

    // Simulate clicking the user avatar to open the user menu
    fireEvent.click(screen.getByLabelText("account of current user"));
    // Check for one of the user menu items to verify the menu opened
    expect(screen.getByText("Profile")).toBeInTheDocument();
  });

  // You can add more specific tests for interactions or navigation if needed
});
