if (typeof window !== "undefined" && typeof window.matchMedia === "undefined") {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  });
}

import React from "react";
import { describe, test, expect, setup } from "vitest";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {
  render,
  screen,
  renderHook,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import People from "../pages/People/People";
import useGetPeople from "../hooks/api/useGetPeople";
import { Pagination } from "../components";
const queryClient = new QueryClient();

const wrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("People", () => {
  test("fetch people", async () => {
    const { result } = renderHook(() => useGetPeople(), {
      wrapper,
    });
    console.log("Result:", result);
    await waitFor(() => result.current && result.current.isSuccess);
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <People />
      </QueryClientProvider>
    );
  });

  test("renders pagination component", () => {
    render(
      <Pagination total={50} pageSize={10} current={1} onChange={() => {}} />
    );

    //test the presence of the entire pagination component
    const pagination = screen.getByTestId("pagination");
    expect(pagination).toBeInTheDocument();

    //regular expression to match part of the class name
    expect(pagination).toHaveClass(/pagination/);
  });

  test("renders character card", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <People />
      </QueryClientProvider>
    );

    // Wait for the loading spinner to disappear
    await waitFor(() => {
      const loadingSpinner = screen.queryByTestId("loading-spinner");
      return !loadingSpinner; // Continue waiting until the loading spinner is not found
    });

    // Check if the character card is in the DOM
    const characterCard = screen.queryByTestId("character-card-LukeSkywalker");
    // Use toBeNull() for negative case
    expect(characterCard).toBeNull();
  });

  test("changes page when next page is clicked", async () => {
    // Render the People component with a specific initial page
    const initialPage = 1;
    render(
      <QueryClientProvider client={new QueryClient()}>
        <People />
      </QueryClientProvider>
    );

    // Get the pagination component
    const pagination = screen.getByTestId("pagination");

    // Find the next page button and click it
    const nextPageButton = screen.getByTitle("Next Page");
    fireEvent.click(nextPageButton);

    await waitFor(() => {
      // Check if the page number has changed
      const currentPageNumber = pagination.querySelector(
        ".ant-pagination-item-active"
      );

      // If currentPageNumber is null, retry the assertion
      if (currentPageNumber === null) {
        return false;
      }

      //Check if the page number has changed
      const currentPageText = currentPageNumber.textContent.trim();
      expect(currentPageText).toEqual((initialPage + 1).toString());
      return true;
    });
  });
});
