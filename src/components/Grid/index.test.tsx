import { Grid } from ".";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Cell", () => {

  it("should render", async () => {
    render(<Grid />);
    const grid = screen.getByTestId("grid-test");
    expect(grid).toBeInTheDocument();
  });
  
});