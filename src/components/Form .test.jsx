import { expect, test } from "vitest";
import { render, fireEvent, waitFor, cleanup } from "@testing-library/react";
import LoginForm from "./LoginForm";
import "jsdom-global/register";

test("should render the login form correctly", () => {
  const { getByLabelText } = render(<LoginForm />);

  expect(getByLabelText("email")).toBeTruthy();
  expect(getByLabelText("Password")).toBeTruthy();
  cleanup();
});

test("should update form inputs correctly when the user types in them", () => {
  const { getByLabelText } = render(<LoginForm />);
  const usernameInput = getByLabelText("email");
  const passwordInput = getByLabelText("Password");

  fireEvent.change(usernameInput, { target: { value: "nikhil@gmail.com" } });
  fireEvent.change(passwordInput, { target: { value: "nikhil@1234" } });

  expect(usernameInput.value).toBe("nikhil@gmail.com");
  expect(passwordInput.value).toBe("nikhil@1234");
  cleanup();
});
test("should submit the form successfully when the user clicks the login button with valid credentials", async () => {
  const { getByLabelText, queryAllByText } = render(<LoginForm />);
  const usernameInput = getByLabelText("email");
  const passwordInput = getByLabelText("Password");

  fireEvent.change(usernameInput, { target: { value: "email" } });
  fireEvent.change(passwordInput, { target: { value: "password" } });

  const loginButtons = queryAllByText("Login");

  expect(loginButtons.length).toBeGreaterThan(0);

  fireEvent.click(loginButtons[0]);
});
