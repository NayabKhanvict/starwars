import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders the FallbackUI when data is loading", async () => {
    render(<App />);
  });
});
