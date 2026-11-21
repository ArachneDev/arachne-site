import { describe, expect, it } from "vitest";
import { matches, roster } from "@/lib/clan-data";
import { LEAGUE, SEASON_ONE, fmtMatchTime, placementPoints } from "@/lib/league-data";

describe("Verified RCNE WDL snapshot", () => {
  it("keeps unstarted Season 1 separate from the friendly record", () => {
    expect(SEASON_ONE.status).toBe("Not started");
    expect(SEASON_ONE.position).toBeNull();
    expect(SEASON_ONE.points).toBe(0);
    expect(SEASON_ONE.played).toBe(0);
    expect(SEASON_ONE.placements).toEqual({ first: 0, second: 0, third: 0 });
    expect(LEAGUE.points).toBe(7);
    expect(LEAGUE.played).toBe(4);
  });
  it("scores first, second and third as 3, 2 and 1 points", () => {
    expect([placementPoints(1), placementPoints(2), placementPoints(3)]).toEqual([3, 2, 1]);
  });
  it("reconciles four results, seven points and a 14th-place friendly record", () => {
    const results = matches.filter(m => m.placement);
    expect(results).toHaveLength(4);
    expect(results.reduce((total, m) => total + (m.points ?? 0), 0)).toBe(7);
    expect(LEAGUE.position).toBe(14);
    expect(results.filter(m => m.placement === 1)).toHaveLength(1);
    expect(results.filter(m => m.placement === 2)).toHaveLength(1);
    expect(results.filter(m => m.placement === 3)).toHaveLength(2);
  });
  it("records each match as RCNE with two opponents, not a two-team score", () => {
    expect(matches.map(m => [m.id, m.placement, m.points])).toEqual([
      [89, undefined, undefined], [82, undefined, undefined], [29, 3, 1], [55, 1, 3], [26, 3, 1], [8, 2, 2],
    ]);
    expect(matches.every(m => m.opponents.length === 2 && m.opponents.every(t => t.tag !== "RCNE"))).toBe(true);
  });
  it("preserves correct London kickoff times through the clock change", () => {
    expect(matches[0]?.date).toBe("2026-10-23T18:30:00Z");
    expect(matches[1]?.date).toBe("2026-10-25T19:30:00Z");
    expect(fmtMatchTime("2026-10-23T18:30:00Z")).toBe("19:30");
    expect(fmtMatchTime("2026-10-25T19:30:00Z")).toBe("19:30");
  });
  it("keeps 77 league registrations distinct from the 35-player owner roster", () => {
    expect(LEAGUE.registeredMembers).toBe(77);
    expect(roster).toHaveLength(35);
    expect(roster.filter(m => m.rank === "Triarch").map(m => m.callsign)).toEqual(["Satchel", "Celestial", "Bubblebeard"]);
  });
});
import { FRIENDLIES_TABLE, SEEDING_TOURNAMENT } from "@/lib/league-data";
describe("Friendlies table snapshot", () => {
  it("lists 36 teams with RCNE 14th on 7 points", () => {
    expect(FRIENDLIES_TABLE).toHaveLength(36);
    expect(FRIENDLIES_TABLE.findIndex(r => r.tag === "RCNE")).toBe(13);
    expect(FRIENDLIES_TABLE[13]).toMatchObject({ name: "ARACHNE", points: 7, played: 4 });
    expect(FRIENDLIES_TABLE[1]?.tag).toBe("GI|I");
    expect(FRIENDLIES_TABLE[2]?.tag).toBe("|PV|");
  });
  it("keeps the seeding tournament unstarted with no points", () => {
    expect(SEEDING_TOURNAMENT).toMatchObject({ status: "Not started", points: 0, played: 0, position: null });
  });
});
