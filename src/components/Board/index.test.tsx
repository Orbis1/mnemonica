import { Board } from ".";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Cell", () => {

  it("should render", async () => {
    render(<Board />);
    const Board = screen.getByTestId("board-test");
    expect(Board).toBeInTheDocument();
  });
  
});