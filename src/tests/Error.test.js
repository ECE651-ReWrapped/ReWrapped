import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";

//Array of Routes
const nonExistantRoutes = [
  "/this_one_does",
  "/lets-see",
  "/userAuthentication",
];
describe("ErrorPage for unknown routes", () => {
  nonExistantRoutes.forEach((route) => {
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
          initialEntries: [route],
        }
      );

      //Wrapping the app with the provider
      render(<RouterProvider router={router} />);

      //Assert that the errorPage content is displayed
      expect(screen.getByText(/404: Invalid Page/i)).toBeInTheDocument();
    });
  });
});
