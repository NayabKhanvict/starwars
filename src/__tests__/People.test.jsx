import React from "react";
import { describe, expect, it, vi } from "vitest";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { render, screen, renderHook } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import People from "../pages/People/People";
import useGetPeople from "../hooks/api/useGetPeople";

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
  });

  // test("changes the page when a different page is selected in the Pagination component", () => {
  //   const mockSetPage = vi.fn();
  //   render(<People setPage={mockSetPage} />);
  //   const pagination = screen.getByRole("pagination");
  //   const nextPageButton = pagination.querySelector(
  //     'button[title="Go to next page"]'
  //   );
  //   userEvent.click(nextPageButton);
  //   expect(mockSetPage).toHaveBeenCalledWith(2);
  // });
});



// test("renders the Pagination component with the correct props", () => {
//   render(<People />);
//   const pagination = screen.getByRole("pagination");
//   expect(pagination).toHaveAttribute("current", "1");
//   expect(pagination).toHaveAttribute("total", "100");
// });


// test("renders the CharacterModal when a character card is clicked", () => {
//   render(<People />);
//   const characterCard = screen.getByRole("button", { name: /Character Card/i });
//   userEvent.click(characterCard);
//   expect(screen.getByRole("dialog")).toBeInTheDocument();
// });

// test("changes the page when a different page is selected in the Pagination component", () => {
//   const mockSetPage = vi.fn();
//   render(<People setPage={mockSetPage} />);
//   const pagination = screen.getByRole("pagination");
//   const nextPageButton = pagination.querySelector(
//     'button[title="Go to next page"]'
//   );
//   userEvent.click(nextPageButton);
//   expect(mockSetPage).toHaveBeenCalledWith(2);
// });
