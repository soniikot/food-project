import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { Search } from "./Search";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { Dropdown } from "../Dropdown/Dropdown";
import { vi } from "vitest";

const recentSearchMock = [
  {
    search_id: "1",
    search_query: "Search 1",
    search_date: "2021-01-01",
  },
];

vi.mock("../../hooks/useFetch", () => ({
  useFetch: () => ({
    data: [],
    loading: false,
    error: null,
    handleSearch: vi.fn(),
    getRecentSearches: vi.fn().mockResolvedValue([]),
  }),
}));

describe("Search", () => {
  it("renders search component", async () => {
    render(<Search />);

    await waitFor(() => {
      expect(
        screen.getByPlaceholderText("Search for a recipe")
      ).toBeInTheDocument();
    });
  });

  it("should open the dropdown when on click", async () => {
    render(<Search />);
    render(
      <Dropdown recentSearch={recentSearchMock} onClickToItem={() => {}} />
    );

    await act(async () => {
      fireEvent.click(screen.getByPlaceholderText("Search for a recipe"));
    });

    await waitFor(() => {
      expect(screen.getByText("Search 1")).toBeInTheDocument();
    });
  });
});
