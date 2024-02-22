import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { ErrorPage } from "../pages/ErrorPage";

test("Renders the Error page for unknown routes", () => {
  //Create a memory router with an initial entry pointing to an unknown route
  const router = createMemoryRouter(
    [
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
    {
      initialEntries: ["/someRandomRoute"],
    }
  );

  //Wrapping the app with the provider
  render(<RouterProvider router={router} />);

  //Assert that the errorPage content is displayed
  expect(screen.getByText(/ErrorPage/i)).toBeInTheDocument();
});
