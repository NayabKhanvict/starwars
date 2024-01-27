import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import People from "../pages/People/People";
import { useGetPeople } from "../hooks/api/useGetPeople";

// Mock the API response for testing
vi.mocked(useGetPeople).mockReturnValue({
  data: {
    count: 82,
    next: "https://swapi.dev/api/people/?page=2",
    previous: null,
    results: [
      {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
        homeworld: "https://swapi.dev/api/planets/1/",
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/6/",
        ],
        species: [],
        vehicles: [
          "https://swapi.dev/api/vehicles/14/",
          "https://swapi.dev/api/vehicles/30/",
        ],
        starships: [
          "https://swapi.dev/api/starships/12/",
          "https://swapi.dev/api/starships/22/",
        ],
        created: "2014-12-09T13:50:51.644000Z",
        edited: "2014-12-20T21:17:56.891000Z",
        url: "https://swapi.dev/api/people/1/",
      },
      {
        name: "C-3PO",
        height: "167",
        mass: "75",
        hair_color: "n/a",
        skin_color: "gold",
        eye_color: "yellow",
        birth_year: "112BBY",
        gender: "n/a",
        homeworld: "https://swapi.dev/api/planets/1/",
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/4/",
          "https://swapi.dev/api/films/5/",
          "https://swapi.dev/api/films/6/",
        ],
        species: ["https://swapi.dev/api/species/2/"],
        vehicles: [],
        starships: [],
        created: "2014-12-10T15:10:51.357000Z",
        edited: "2014-12-20T21:17:50.309000Z",
        url: "https://swapi.dev/api/people/2/",
      },
    ],
  },
  isLoading: false,
});

test("renders the loading indicator while data is loading", () => {
  vi.mocked(useGetPeople).mockReturnValue({
    isLoading: true,
  });

  render(<People />);
  expect(screen.getByRole("progressbar")).toBeInTheDocument();
});

test("renders the Pagination component with the correct props", () => {
  render(<People />);
  const pagination = screen.getByRole("pagination");
  expect(pagination).toHaveAttribute("current", "1");
  expect(pagination).toHaveAttribute("total", "100");
});

test("renders a CharacterCard for each character in the data", () => {
  render(<People />);
  const characterCards = screen.getAllByRole("button", {
    name: /Character Card/i,
  });
  expect(characterCards).toHaveLength(/* Number of mock characters */);
});

test("renders the CharacterModal when a character card is clicked", () => {
  render(<People />);
  const characterCard = screen.getByRole("button", { name: /Character Card/i });
  userEvent.click(characterCard);
  expect(screen.getByRole("dialog")).toBeInTheDocument();
});

test("changes the page when a different page is selected in the Pagination component", () => {
  const mockSetPage = vi.fn();
  render(<People setPage={mockSetPage} />);
  const pagination = screen.getByRole("pagination");
  const nextPageButton = pagination.querySelector(
    'button[title="Go to next page"]'
  );
  userEvent.click(nextPageButton);
  expect(mockSetPage).toHaveBeenCalledWith(2);
});
