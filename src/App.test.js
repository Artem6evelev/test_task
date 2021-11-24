import React from "@testing-library/react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import Search from "../src/components/search/search.component";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  ReactDOM.unmountComponentAtNode(div);
  // screen.debug()
});

it("search snapshoot", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Search />
    </Provider>
  );
  expect(asFragment(<Search />)).toMatchSnapshot();
});

describe("placeholder in Search", () => {
  it("renders Search component", () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(screen.getByPlaceholderText("Your City")).toBeInTheDocument();
  });
});

//? Case: check deefault value for different forms
// describe("check props in Search", () => {
//   it("renders Search component", () => {
//     render(
//       <Provider store={store}>
//         <Search />
//       </Provider>
//     );
//     expect(screen.getByDisplayValue("123")).toBeInTheDocument();
//   });
// });

//! Need to fix test
// describe("Search", () => {
//   test("renders Search component", async () => {
//     render(
//       <Provider store={store}>
//         <Search />
//       </Provider>
//     );
//     await screen.findByText(/Moscow/);
//     expect(screen.queryByText(/Searches for React/)).toBeNull();
//     userEvent.type(screen.getByRole("textbox"), "React");
//     expect(screen.getByText(/Searches for React/)).toBeInTheDocument();
//   });
// });

// describe("events", () => {
//   it("checkbox click", () => {
//     const {container} = render(<input type="checkbox" />)
//     const checkbox = container.firstChild;
//     expect(checkbox).not.toBeChecked()
//     // fireEvent.click(checkbox);
//     userEvent.click(checkbox)
//     expect(checkbox).toBeChecked()
//   })
// })
