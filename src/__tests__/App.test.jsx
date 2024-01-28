import React from "react";
import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("renders the FallbackUI when App is loading", async () => {
    render(<App />);
    expect(screen.getByTestId("fallback-ui")).toBeDefined();
  });
});
