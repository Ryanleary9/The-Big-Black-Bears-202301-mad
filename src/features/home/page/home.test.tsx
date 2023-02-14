import { render, screen } from "@testing-library/react";
import { HomePage } from "./home";

describe("Given home component", () => {
  describe("When it is render", () => {
    test('Then it should render "Home Page"', () => {
      render(
        <>
          <HomePage></HomePage>
        </>
      );
      const element = screen.getByText(/Home Page/i);
      expect(element).toBeInTheDocument();
    });
  });
});