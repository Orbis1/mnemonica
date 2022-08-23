import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Board } from "./Board";

describe("Cell", () => {

  it("should render", async () => {
    render(<Board cells = {[0, 1, 0, 1]} onClick={() => {}} rotate={false} rotateClass=''/>);
    const board = screen.getByTestId("board-test");
    expect(board).toBeInTheDocument();
  });
  
});