import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "../containers/Login";
import axios from "axios";

// Mock axios
jest.mock("axios");
const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Login Component Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Form can be filled and submit button is correctly pressed", async () => {
    // Setup mock for axios.post
    axios.post.mockResolvedValue({ status: 200 });

    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /login/i });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    fireEvent.click(submitButton);

    //wait for the axios post to have been called to ensure submission
    await waitFor(() => expect(axios.post).toHaveBeenCalled());
  });

  test("navigates to '/' on unsuccessful login", async () => {
    // Mock axios to simulate a failed login attempt
    axios.post.mockResolvedValue({ status: 401 });

    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    // Fill in the form and submit
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "user@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "wrongpassword" },
    });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    // Wait for the form submission to be handled
    await waitFor(() => expect(axios.post).toHaveBeenCalled());

    // Check if navigation was called with the expected argument
    expect(mockedUseNavigate).toHaveBeenCalledWith("/");
  });

  test("catches error and navigates to '/' on login failure", async () => {
    // Mock axios to simulate an error being thrown
    axios.post.mockRejectedValue(new Error("Login failed"));

    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "user@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password" },
    });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => expect(axios.post).toHaveBeenCalled());

    expect(mockedUseNavigate).toHaveBeenCalledWith("/");
  });
});
