import triarchEmblem from "@/assets/Triarch.png.asset.json";
import packCommanderEmblem from "@/assets/PackCommander.png.asset.json";
import packMasterEmblem from "@/assets/PackMaster.png.asset.json";
import hellHoundsEmblem from "@/assets/HellHound_2.png.asset.json";
import forgeweaverCrest from "@/assets/ForgeWeaver.asset.json";
import cerberusCrest from "@/assets/Cerberus.asset.json";
import blackspearCrest from "@/assets/BlackSpear.asset.json";
import direhoundCrest from "@/assets/Direhound.asset.json";
import deadwatchCrest from "@/assets/Deadwatch.asset.json";
import deathwingCrest from "@/assets/Deathwing.asset.json";
import dreadnoughtCrest from "@/assets/Dreadnought.asset.json";
import satchelAvatar from "@/assets/satchel-avatar.png.asset.json";
import { type LeagueMatch } from "@/lib/league-data";

export const CLAN = { name: "Arachne", tag: "RCNE", game: "WARDOGS", members: 392 };

const ORDINAL_SUFFIX: Record<number, string> = { 1: "st", 2: "nd", 3: "rd" };
export const ordinal = (n: number) => {
  const v = n % 100;
  if (v >= 11 && v <= 13) return `${n}th`;
  return `${n}${ORDINAL_SUFFIX[n % 10] ?? "th"}`;
};

export const RANKS = ["Triarch", "Pack Commander", "Pack Master", "Hell Hounds"] as const;
export type ClanRank = (typeof RANKS)[number];

export const rankEmblems: Record<ClanRank, string> = {
  Triarch: triarchEmblem.url,
  "Pack Commander": packCommanderEmblem.url,
  "Pack Master": packMasterEmblem.url,
  "Hell Hounds": hellHoundsEmblem.url,
};

export const SQUADS = [
  { id: "forgeweaver", name: "ForgeWeaver", division: "Builders", crest: forgeweaverCrest.url, hue: "var(--squad-forgeweaver)" },
  { id: "cerberus", name: "Cerberus", division: "Assault", crest: cerberusCrest.url, hue: "var(--squad-cerberus)" },
  { id: "blackspear", name: "BlackSpear", division: "Assault", crest: blackspearCrest.url, hue: "var(--squad-blackspear)" },
  { id: "direhound", name: "DireHound", division: "Assault", crest: direhoundCrest.url, hue: "var(--squad-direhound)" },
  { id: "deadwatch", name: "DeadWatch", division: "Recon", crest: deadwatchCrest.url, hue: "var(--squad-deadwatch)" },
  { id: "deathwing", name: "Deathwing", division: "Air Assault", crest: deathwingCrest.url, hue: "var(--squad-deathwing)" },
  { id: "dreadnought", name: "Dreadnought", division: "Mech Assault", crest: dreadnoughtCrest.url, hue: "var(--squad-dreadnought)" },
] as const;
export type SquadId = (typeof SQUADS)[number]["id"];
export type Squad = (typeof SQUADS)[number];

// avatar is optional: only members whose profile picture the owner supplied show one.
export type Member = { callsign: string; role: string; rank: ClanRank; squad: SquadId | null; nationality: string | null; avatar?: string };
export const roster: Member[] = [
  { callsign: "Satchel", role: "Assault", rank: "Triarch", squad: null, nationality: "UK", avatar: satchelAvatar.url },
  { callsign: "Celestial", role: "Assault", rank: "Triarch", squad: null, nationality: "Netherlands" },
  { callsign: "Bubblebeard", role: "Assault", rank: "Triarch", squad: null, nationality: "UK" },
  { callsign: "Scuppa", role: "Assault", rank: "Pack Commander", squad: null, nationality: null },
  { callsign: "VladXD1", role: "Assault", rank: "Pack Master", squad: null, nationality: null },
  { callsign: "Freddy", role: "Assault", rank: "Pack Master", squad: null, nationality: null },
  { callsign: "Emphatique", role: "Assault", rank: "Hell Hounds", squad: "cerberus", nationality: null },
  { callsign: "leem", role: "Air Assault", rank: "Hell Hounds", squad: "deathwing", nationality: null },
  { callsign: "NEMESIS", role: "Assault", rank: "Hell Hounds", squad: "cerberus", nationality: "UK" },
  { callsign: "Herbie", role: "Air Assault", rank: "Hell Hounds", squad: "deathwing", nationality: null },
  { callsign: "Kekse", role: "Assault", rank: "Hell Hounds", squad: "cerberus", nationality: null },
  { callsign: "Caliberus", role: "Assault", rank: "Hell Hounds", squad: "cerberus", nationality: null },
  { callsign: "Toky07", role: "Assault", rank: "Hell Hounds", squad: "cerberus", nationality: "UK" },
  { callsign: "Pleko", role: "Assault", rank: "Hell Hounds", squad: "cerberus", nationality: null },
  { callsign: "AlphaTrooper", role: "Air Assault", rank: "Hell Hounds", squad: "deathwing", nationality: null },
  { callsign: "Plyplex", role: "Assault", rank: "Hell Hounds", squad: "cerberus", nationality: "UK" },
  { callsign: "dominik", role: "Air Assault", rank: "Hell Hounds", squad: "deathwing", nationality: null },
  { callsign: "Veloce", role: "Assault", rank: "Hell Hounds", squad: "cerberus", nationality: null },
  { callsign: "Lord (Mac)", role: "Air Assault", rank: "Hell Hounds", squad: "deathwing", nationality: null },
  { callsign: "KAISER", role: "Assault", rank: "Hell Hounds", squad: "blackspear", nationality: null },
  { callsign: "Hu$h", role: "Assault", rank: "Hell Hounds", squad: "blackspear", nationality: null },
  { callsign: "IMRuski", role: "Mech Assault", rank: "Hell Hounds", squad: "dreadnought", nationality: null },
  { callsign: "AlwaysDVB", role: "Assault", rank: "Hell Hounds", squad: "blackspear", nationality: "Netherlands" },
  { callsign: "Pokerson", role: "Recon", rank: "Hell Hounds", squad: "deadwatch", nationality: null },
  { callsign: "BzaWack", role: "Builder", rank: "Hell Hounds", squad: "forgeweaver", nationality: "UK" },
  { callsign: "moo", role: "Builder", rank: "Hell Hounds", squad: "forgeweaver", nationality: "UK" },
  { callsign: "Brumpet", role: "Air Assault", rank: "Hell Hounds", squad: "deathwing", nationality: "UK" },
  { callsign: "FaYeR", role: "Recon", rank: "Hell Hounds", squad: "deadwatch", nationality: "Denmark" },
  { callsign: "Nikelele", role: "Assault", rank: "Hell Hounds", squad: "blackspear", nationality: "Finland" },
  { callsign: "COOKIE", role: "Mech Assault", rank: "Hell Hounds", squad: "dreadnought", nationality: "UK" },
  { callsign: "Xlever", role: "Assault", rank: "Hell Hounds", squad: "direhound", nationality: "Romania" },
  { callsign: "Blitzoi", role: "Assault", rank: "Hell Hounds", squad: "direhound", nationality: "Romania" },
  { callsign: "Reinout", role: "TBD", rank: "Hell Hounds", squad: null, nationality: "Netherlands" },
  { callsign: "Godfella", role: "Assault", rank: "Hell Hounds", squad: "direhound", nationality: "Netherlands" },
  { callsign: "TacaticalSprout", role: "Builder", rank: "Hell Hounds", squad: "forgeweaver", nationality: "Belgium" },
];

// Newest members shown in the HQ ticker — add or remove names here.
export const newMembers: string[] = ["Reinout"];


export const matches: LeagueMatch[] = [
  { id: 89, date: "2026-10-23T18:30:00Z", opponents: [{ tag: "KOD", name: "Kids on Drugs" }, { tag: "331", name: "331st" }], map: "Zestafona", zone: "Houses", faction: "Valkyra", lighting: "DayLateGrayFog", mapStatus: "Map vote open", url: "https://wardogsleague.net/matches/cmvjbk14103fjml011d80gzfv" },
  { id: 82, date: "2026-10-25T19:30:00Z", opponents: [{ tag: "KOD", name: "Kids on Drugs" }, { tag: "WTH", name: "WTH" }], map: "Ozeti", zone: "Farmland", faction: "Valkyra", lighting: "DayStartClear", mapStatus: "Map confirmed", url: "https://wardogsleague.net/matches/cmvczgyzz01g2ml01cg8dqgoa" },
  { id: 29, date: "2026-10-10T18:00:00Z", opponents: [{ tag: "82AD", name: "82nd Airborne Division" }, { tag: "GI|I", name: "Greyhounds" }], map: "Bakurani", zone: "Farmland", faction: "Manticore", placement: 3, points: 1, confirmation: "Set by admin", url: "https://wardogsleague.net/matches/cmujtvqvx0112lf015fbbauxl" },
  { id: 55, date: "2026-10-09T18:00:00Z", opponents: [{ tag: "PTW", name: "Portuguese Wardogs" }, { tag: "LZRD", name: "Team Lizard" }], map: "Zestafona", zone: "Default", faction: "Lonestar", placement: 1, points: 3, confirmation: "Confirmed by staff", url: "https://wardogsleague.net/matches/cmuzy4z8t019omm01tvkfrv27" },
  { id: 26, date: "2026-10-03T18:00:00Z", opponents: [{ tag: "ROG", name: "Team Rogue" }, { tag: "BMF", name: "BeMyFrag" }], map: "Zestafona", zone: "WaterTreatment", faction: "Manticore", placement: 3, points: 1, confirmation: "Confirmed · all three agreed", url: "https://wardogsleague.net/matches/cmuim5nu20073lf01332kozcf" },
  { id: 8, date: "2026-09-25T18:00:00Z", opponents: [{ tag: "EXTM", name: "eXtreme" }, { tag: "ROG", name: "Team Rogue" }], map: "Bakurani", zone: "Default", faction: "Lonestar", placement: 2, points: 2, confirmation: "Confirmed by staff", url: "https://wardogsleague.net/matches/cmu2yhxlr0092o401g8kemvzy" },
];

export type ClanEvent = { date: string; title: string; type: string; desc: string; url: string };
export const events: ClanEvent[] = matches.filter(m => !m.placement).map(m => ({
  date: m.date.slice(0, 10), title: `WDL Friendly #${m.id}`, type: "League fixture",
  desc: `RCNE / ${m.opponents.map(team => team.tag).join(" / ")} · ${m.map} / ${m.zone}. ${new Date(m.date).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/London" })} London time.`,
  url: m.url,
}));

export const fmtDate = (d: string) =>
  new Date(d + "T00:00:00Z").toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" });
