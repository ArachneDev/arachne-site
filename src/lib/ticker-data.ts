import { matches, fmtDate, ordinal, newMembers } from "@/lib/clan-data";
import { LEAGUE, fmtMatchDate, fmtMatchTime, matchOpponents } from "@/lib/league-data";
import { individualRecords } from "@/lib/hall-of-fame-data";
import { mediaItems, featuredVideoId } from "@/lib/media-data";

type TickerPage = "matches" | "fame" | "enlist";
type TickerItem = { label: string; value: string; page: TickerPage };

export function getTickerItems(): TickerItem[] {
  const next = matches.find(m => !m.placement);
  const last = matches.find(m => m.placement);
  const featured = mediaItems.find(item => item.id === featuredVideoId && item.kind === "video");
  return [
    { label: "Recruitment open", value: "Competitive or casual — hop in", page: "enlist" },
    ...(next ? [{ label: "Next match", value: `RCNE / ${matchOpponents(next)} // ${fmtMatchDate(next.date)} ${fmtMatchTime(next.date)} London // ${next.map}`, page: "matches" as const }] : []),
    ...(last?.placement ? [{ label: "Last result", value: `${ordinal(last.placement)} // +${last.points} pt // RCNE / ${matchOpponents(last)}`, page: "matches" as const }] : []),
    ...newMembers.map(n => ({ label: "New member", value: n, page: "enlist" as const })),
    ...individualRecords.filter(record => record.holder !== null && record.value !== null).map(record => ({ label: "Hall of Fame", value: `${record.title} // ${record.holder} // ${record.value}${record.unit === "m" ? "m" : ` ${record.unit}`}`, page: "fame" as const })),
    { label: "WDL friendly record", value: `${ordinal(LEAGUE.position)} // ${LEAGUE.points} points // checked ${fmtDate(LEAGUE.checkedAt)}`, page: "matches" },
    { label: "Video of the Week", value: featured?.title ?? "No video selected yet", page: "fame" },
    { label: "Discord", value: "discord.gg/rcne", page: "enlist" },
  ];
}