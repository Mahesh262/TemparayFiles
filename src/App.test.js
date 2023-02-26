import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Testings from "./Testings";

describe("Testings", () => {
  it("should render same text passed into title prop", () => {
    render(<Testings />);
    const h1Element = screen.getByRole("heading");
    expect(h1Element).toBeInTheDocument();
  });

  it("Increment Counter", () => {
    render(<Testings />);
    const buttonElement = screen.getByRole("button", { name: "Increment" });
    userEvent.click(buttonElement);
    let count = screen.getByText("2");
    expect(count).toBeInTheDocument();
  });

  it("Decrement Counter", () => {
    render(<Testings />);
    const decrElement = screen.getByRole("button", { name: "Decrement" });

    // expect(Number(countnumber)).toEqual(1);
    userEvent.click(decrElement);
    const count = screen.getByText("0");

    expect(count).toBeInTheDocument();
  });
});
