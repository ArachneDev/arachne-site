import { describe, expect, it } from "vitest";
import { getTickerItems } from "./ticker-data";

describe("scrolling update sources", () => {
  it("uses only Matches, Hall of Fame (incl. media) and Enlist", () => {
    const pages = [...new Set(getTickerItems().map(item => item.page))].sort();
    expect(pages).toEqual(["enlist", "fame", "matches"]);
  });
});