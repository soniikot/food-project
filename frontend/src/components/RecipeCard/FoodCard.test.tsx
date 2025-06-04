import { render, screen } from "@testing-library/react";
import { RecipeCard } from "./RecipeCard";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

const food = {
  id: 1,
  title: "Food Title",
  image: "Food Image",
  servings: 1,
  nutrition: { nutrients: [{ amount: 100 }] },
  summary: "Food Summary",
};

describe("FoodCard", () => {
  it("should render the food card", () => {
    render(<RecipeCard food={food} onClick={() => {}} />);
    expect(screen.getByText("Food Title")).toBeInTheDocument();
    expect(screen.getByText("Calories: 100 kcal")).toBeInTheDocument();
    expect(screen.getByAltText("Food Title")).toBeInTheDocument();
  });
});
