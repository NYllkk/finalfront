import { test, expect } from "vitest";
import {
  cleanup,
  fireEvent,
  render,
  waitFor,
  screen,
} from "@testing-library/react";
import Phone from "./Phone";
import "jsdom-global/register";

test("should render phone component", () => {
  const { getByLabelText } = render(<Phone />);
  expect(getByLabelText("Enter phone number")).toBeTruthy();
});
cleanup();

test("should update the value when the Number will change ", () => {
  const { getByLabelText } = render(<Phone />);
  const PhoneINput = getByLabelText("Enter phone number");
  fireEvent.change(PhoneINput, { target: { value: "newPhoneNumber" } });
  expect(PhoneINput.value).toBe("newPhoneNumber");
  cleanup();
});

// test("should update Country", async () => {
//     const { getByLabelText } = render(<Phone />);
//     await waitFor(() => {

//         const CountryInput = getByLabelText("Select Country")
//         fireEvent.change(CountryInput, { target: { value: "US" } })
//         expect(CountryInput.value).toBe("US");
//     })

// })
