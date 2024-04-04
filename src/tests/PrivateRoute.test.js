import React from "react";
import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "../routes/privateRoute";
import "@testing-library/jest-dom";

//Mocks
jest.mock("axios");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(() => null),
}));

//Will render if validation is true
const ChildComponent = () => <div>Protected Content</div>;

describe("Protected Route", () => {
  it("renders child component when authenticated", async () => {
    axios.get.mockResolvedValueOnce({ data: { auth: true } });

    const { getByText } = render(
      <ProtectedRoute>
        <ChildComponent />
      </ProtectedRoute>
    );

    await waitFor(() => {
      expect(getByText("Protected Content")).toBeInTheDocument();
    });
  });

  it("redirects when user is not authenticatdd", async () => {
    axios.get.mockResolvedValueOnce(new Error("User not Authenticated"));

    render(
      <ProtectedRoute redirectPath="/login">
        <ChildComponent />
      </ProtectedRoute>
    );

    await waitFor(() =>
      expect(Navigate).toHaveBeenCalledWith({ to: "/login" }, {})
    );
  });

  it("Handles loading states", () => {
    axios.get.mockResolvedValueOnce({ data: { auth: false } });

    const { queryByText } = render(
      <ProtectedRoute>
        <ChildComponent />
      </ProtectedRoute>
    );

    expect(queryByText("Protected Content")).not.toBeInTheDocument();
  });
});
