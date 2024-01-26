import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app component correctly", () => {
  render(<App />);
  expect(screen.getByText("Hello, world!")).toBeInTheDocument();
});
