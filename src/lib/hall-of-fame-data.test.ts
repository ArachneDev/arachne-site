import { describe, expect, it } from "vitest";
import { individualRecords } from "./hall-of-fame-data";

describe("Owner-supplied individual records", () => {
  it("records NEMESIS with 123 kills in a game", () => {
    expect(individualRecords.find(record => record.id === "kills")).toMatchObject({ holder: "NEMESIS", value: 123, unit: "kills" });
  });
  it("records FaYeR with a 1253 metre sniper shot", () => {
    expect(individualRecords.find(record => record.id === "sniper")).toMatchObject({ holder: "FaYeR", value: 1253, unit: "m" });
  });
});