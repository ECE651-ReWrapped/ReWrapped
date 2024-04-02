import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Signup from "../containers/Signup";
import axios from "axios";
import { act } from "react-dom/test-utils";

//Mock functions
jest.mock("axios");
const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));
jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn(),
}));

describe("Signup Component Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    axios.post.mockClear();
  });

  test("form can be filled and submit button is correctly pressed", async () => {
    axios.post.mockResolvedValue({ status: 200 }); // Simulate a successful signup

    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    // Target inputs by their label text
    const emailInput = screen.getByLabelText("Email");
    const nameInput = screen.getByLabelText("Username");
    const passwordInput = screen.getByLabelText("Password");
    const confirmPasswordInput = screen.getByLabelText("Confirm Password");

    // Fill out the form
    fireEvent.change(emailInput, { target: { value: "newuser@example.com" } });
    fireEvent.change(nameInput, { target: { value: "newuser" } });
    fireEvent.change(passwordInput, { target: { value: "Password123" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "Password123" },
    });

    const submitButton = screen.getByRole("button", { name: /Sign up/i });
    fireEvent.click(submitButton);

    await waitFor(() => expect(axios.post).toHaveBeenCalled());

    // Verify navigation to "/dashboard"
    expect(mockedUseNavigate).toHaveBeenCalledWith("/dashboard");
  });

  test("does not submit the form when required fields are not filled", async () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    // Simulate user interactions with act
    await act(async () => {
      fireEvent.change(screen.getByLabelText("Email"), {
        target: { value: "user@example.com" },
      });

      const submitButton = screen.getByRole("button", { name: /Sign up/i });
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      // Check that axios.post was not called since the form submission should be blocked by validation
      expect(axios.post).not.toHaveBeenCalled();
    });
  });

  test("handles non-200 status code gracefully", async () => {
    axios.post.mockResolvedValue({ status: 400 });

    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    await act(async () => {
      fireEvent.change(screen.getByLabelText("Email"), {
        target: { value: "user@example.com" },
      });
      fireEvent.change(screen.getByLabelText("Username"), {
        target: { value: "user" },
      });
      fireEvent.change(screen.getByLabelText("Password"), {
        target: { value: "Password123" },
      });
      fireEvent.change(screen.getByLabelText("Confirm Password"), {
        target: { value: "Password123" },
      });
      fireEvent.click(screen.getByRole("button", { name: /sign up/i }));
    });

    await waitFor(() => {
      // Here, verify that the component does NOT navigate to the success page
      expect(mockedUseNavigate).not.toHaveBeenCalledWith("/dashboard");
    });
  });

  test("handles error during API call gracefully", async () => {
    axios.post.mockRejectedValue(new Error("Network error"));

    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    // Simulate form submission
    await act(async () => {
      fireEvent.change(screen.getByLabelText("Email"), {
        target: { value: "user@example.com" },
      });
      fireEvent.change(screen.getByLabelText("Username"), {
        target: { value: "user" },
      });
      fireEvent.change(screen.getByLabelText("Password"), {
        target: { value: "Password123" },
      });
      fireEvent.change(screen.getByLabelText("Confirm Password"), {
        target: { value: "Password123" },
      });
      fireEvent.click(screen.getByRole("button", { name: /sign up/i }));
    });

    await waitFor(() => {
      expect(mockedUseNavigate).not.toHaveBeenCalledWith("/dashboard");
    });
  });
});
