import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import Searchbar from "../components/Searchbar";

//Mocks
jest.mock("axios");
jest.mock("../styles/searchBar", () => ({
  useStyles: () => ({
    container: "",
    searchContainer: "",
    searchInput: "",
    searchIcon: "",
    loading: "",
    resultsContainer: "",
  }),
}));

//Helper to use Debounced searc
const advanceTimers = (time) => jest.advanceTimersByTime(time);

describe("SearchBar", () => {
  let consoleErrorSpy;

  beforeAll(() => {
    jest.useFakeTimers();
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    jest.useRealTimers();
    consoleErrorSpy.mockRestore();
  });

  it("renders correctly", () => {
    render(<Searchbar />);

    expect(screen.getByLabelText(/Find users/i)).toBeInTheDocument();
  });

  it("displays results after search", async () => {
    const users = [{ user_id: "1", user_name: "John Doe" }]; // Mock data
    axios.post.mockResolvedValue({ data: users });
    render(<Searchbar />);

    userEvent.type(screen.getByLabelText(/find users/i), "John");
    advanceTimers(500); // Debounce time

    await waitFor(() =>
      expect(screen.getByText("John Doe")).toBeInTheDocument()
    );
  });

  it("does not search for queries shorter than 3 characters", () => {
    render(<Searchbar />);

    userEvent.type(screen.getByLabelText(/find users/i), "Jo");
    advanceTimers(500);

    expect(axios.post).not.toHaveBeenCalled();
  });

  it("displays an error message when the search fails", async () => {
    axios.post.mockRejectedValue(new Error("Search failed"));
    render(<Searchbar />);

    userEvent.type(screen.getByLabelText(/Find users/i), "test");
    jest.advanceTimersByTime(500);

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith(
        "Search Error",
        expect.any(Error)
      );
    });
  });
});
