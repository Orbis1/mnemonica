/*
Cell is a square
It can be selected
It should change color on click
It should change color to default on second click
It can be market
*/

import { Cell } from "./Cell";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Cell", () => {

  it("should change color on click", async () => {
    render(<Cell />);
    const cell = screen.getByTestId("cell");
    screen.debug();
    expect(cell).toBeInTheDocument();
    await userEvent.click(cell);
    screen.debug();
  });


});