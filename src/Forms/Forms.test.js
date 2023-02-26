import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import UserLogin from "./UserLogin";

describe("Form component", () => {
  test("renders the form inputs", () => {
    render(<UserLogin />);
    const nameInput = screen.getByPlaceholderText("UserName");
    const emailInput = screen.getByPlaceholderText("Email");
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });

  test("updates the form inputs", () => {
    render(<UserLogin />);
    const nameInput = screen.getByPlaceholderText("UserName");
    const emailInput = screen.getByPlaceholderText("Email");
    fireEvent.change(nameInput, { target: { value: "John" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    expect(nameInput.value).toBe("John");
    expect(emailInput.value).toBe("john@example.com");
  });

  test("submits the form", () => {
    render(<UserLogin />);
    const nameInput = screen.getByPlaceholderText("UserName");
    const emailInput = screen.getByPlaceholderText("Email");
    fireEvent.change(nameInput, { target: { value: "John" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);
    // You can add an assertion here to verify the form submission
  });
});
