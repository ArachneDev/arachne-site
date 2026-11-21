// Verified public WDL records. This is a dated snapshot, not an automatic feed.
export const LEAGUE = {
  name: "WARDOGS League",
  teamUrl: "https://wardogsleague.net/teams/RCNE",
  standingsUrl: "https://wardogsleague.net/standings",
  handbookUrl: "https://wardogsleague.net/handbook#rules",
  checkedAt: "2026-10-22",
  competition: "Friendlies",
  seasonStatus: "WDL Seeding Tournament not started",
  position: 14,
  points: 7,
  played: 4,
  registeredMembers: 77,
  placements: { first: 1, second: 1, third: 2 },
} as const;

// Season 1 is a separate competition: friendly results do not count here.
export const SEASON_ONE = {
  name: "WARDOGS League Season 1",
  status: "Not started",
  position: null,
  points: 0,
  played: 0,
  placements: { first: 0, second: 0, third: 0 },
} as const;

export type LeagueTeam = { tag: string; name: string };
export type LeagueMatch = {
  id: number;
  date: string;
  opponents: [LeagueTeam, LeagueTeam];
  map: string;
  zone: string;
  faction: string;
  lighting?: string;
  placement?: 1 | 2 | 3;
  points?: number;
  mapStatus?: string;
  confirmation?: string;
  url: string;
};

export const placementPoints = (placement: 1 | 2 | 3) => 4 - placement;
export const matchOpponents = (match: LeagueMatch) => match.opponents.map(team => team.tag).join(" / ");
export const fmtMatchTime = (date: string) => new Date(date).toLocaleTimeString("en-GB", {
  hour: "2-digit", minute: "2-digit", timeZone: "Europe/London",
});
export const fmtMatchDate = (date: string) => new Date(date).toLocaleDateString("en-GB", {
  day: "2-digit", month: "short", year: "numeric", timeZone: "Europe/London",
});
// Friendlies table snapshot from wardogsleague.net/standings (checked 2026-10-23).
export type StandingRow = { tag: string; name: string; played: number; first: number; second: number; third: number; points: number };
const rows = `PMF|PARDON MY FRENCH|10|6|2|2|24
GI|I|Greyhounds|8|5|3|0|21
|PV||Polish Veterans|7|4|3|0|18
EXTM|eXtreme|6|5|1|0|17
ROG|Team Rogue|9|1|4|4|15
PTW|Portuguese Wardogs|6|1|5|0|13
KOD|Kids on Drugs|5|3|1|1|12
AK||Außer Kontrolle|4|3|1|0|11
BMF|BeMyFrag|6|0|4|2|10
331|331st|4|1|2|1|8
82AD|82nd Airborne Division|4|1|2|1|8
WOUF|WARCHIENS|3|1|2|0|7
WDUA|Wardogs UKRAINE|4|1|1|2|7
RCNE|ARACHNE|4|1|1|2|7
III|Defcon III|2|2|0|0|6
CIS|Wardogs CIS|2|2|0|0|6
LZRD|LZRD Team Lizard|4|0|2|2|6
TLL|Turks Let Loose|3|1|0|2|5
SPIT|Speaking in Tongues|2|0|2|0|4
MERC|RED MERC|3|0|1|2|4
WTH|WTH|1|1|0|0|3
VLK|Valkyria|2|0|1|1|3
BAMC|Batallón de Asalto, Maniobra y Combate|3|0|0|3|3
NORD|WARDOGS NORDIC|1|0|1|0|2
26TH|26th Battlegroup|1|0|1|0|2
|4K||Team 4K|1|0|1|0|2
DAXS|Dachschaden|2|0|0|2|2
AGS|AEGIS|1|0|0|1|1
HTD|HaiiTeD|1|0|0|1|1
ADV|Adversary|1|0|0|1|1
SYN|SYNDICATE|1|0|0|1|1
109T|109 Turtles|1|0|0|1|1
WDC|Wardogs Central|1|0|0|1|1
NO1|Number 1|1|0|0|1|1
WDH|Comunidad Wardogs Hispano|1|0|0|1|1
WDUK|WARDOGS UK|1|0|0|1|1`;
// Tags can contain "|", so parse the last six fields from the right.
export const FRIENDLIES_TABLE: StandingRow[] = rows.split("\n").map(line => {
  const parts = line.split("|");
  const [played = 0, first = 0, second = 0, third = 0, points = 0] = parts.slice(-5).map(Number);
  const name = parts[parts.length - 6] ?? "";
  const tag = parts.slice(0, parts.length - 6).join("|");
  return { tag, name, played, first, second, third, points };
});

// Upcoming competition: no friendly results carry over.
export const SEEDING_TOURNAMENT = {
  name: "WDL Seeding Tournament",
  status: "Not started",
  position: null,
  points: 0,
  played: 0,
} as const;
