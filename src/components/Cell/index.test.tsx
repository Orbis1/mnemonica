import { Cell } from ".";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Cell", () => {
  const mockClick = jest.fn() 

  it("should change color on click", async () => {
    render(<Cell onClick={mockClick}/>);
    const cell = screen.getByTestId("cell");
    expect(cell).toBeInTheDocument();
    await userEvent.click(cell);
    expect(mockClick).toHaveBeenCalled();
    expect(mockClick).toBeCalledTimes(1);
  });

});