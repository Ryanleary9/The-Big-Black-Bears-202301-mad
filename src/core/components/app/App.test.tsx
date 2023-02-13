import { render } from "@testing-library/react";
import App from "./App";
import Footer from "../footer/footer";

jest.mock("../footer/footer");

describe("Given app component", () => {
  describe("When it is rendered", () => {
    test("then should render a text on the screen", () => {
      render(<App />);
      expect(Footer).toHaveBeenCalled();
    });
  });
});
