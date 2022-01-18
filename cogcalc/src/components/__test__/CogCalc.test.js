import { render, screen, cleanup } from "@testing-library/react";
import CogCalc from "../CogCalc";

test("testing cog component renders", () => {
  render(<CogCalc />);
  const cogElement = screen.getByTestId("cog-component");
  expect(cogElement).toBeInTheDocument();
});

test("testing front cog < 50 returns 'going easy'", () => {
  render(<CogCalc />);
  const cogLarge = screen.getByTestId("front-cog-discription");
  expect(cogLarge).toHaveTextContent("Going Easy");
});
