import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ordinal } from "@/lib/clan-data";
import { fmtMatchDate, fmtMatchTime, type LeagueMatch } from "@/lib/league-data";
import { factionArtwork, mapArtwork } from "@/lib/league-artwork";
import clanLogo from "@/assets/arachne-logo.png.asset.json";

const medalText = { 1: "text-medal-gold", 2: "text-medal-silver", 3: "text-medal-bronze" } as const;

export function MatchCard({ match: m }: { match: LeagueMatch }) {
  const map = mapArtwork[m.map];
  const faction = factionArtwork[m.faction];
  return <article aria-label={`WDL match on ${m.map}`} className="overflow-hidden border border-border bg-card">
    <div className="p-5 sm:p-6">
      {/* 1. Clans playing */}
      <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
        <div className="flex min-w-0 items-center gap-3"><img src={clanLogo.url} alt="" className="h-12 w-12 shrink-0 object-contain" /><div className="min-w-0"><h3 className="text-2xl">RCNE <span className="text-muted-foreground">/</span> {m.opponents.map(t => t.tag).join(" / ")}</h3><p className="mt-1 text-xs text-muted-foreground">{m.opponents.map(t => t.name).join(" · ")}</p></div></div>
        {m.placement && <div className="shrink-0 text-right"><p className={`font-stencil text-3xl ${medalText[m.placement]}`}>{ordinal(m.placement)}</p><p className="mt-1 font-mono text-xs text-muted-foreground">+{m.points} {m.points === 1 ? "point" : "points"}</p></div>}
      </div>
      {/* 2. Map */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
        <div className="flex min-w-0 items-center gap-3">
          {map && <img src={map.url} alt={`${m.map} WARDOGS loading-screen screenshot`} loading="lazy" className="aspect-video w-24 shrink-0 rounded-sm border border-border object-cover sm:w-28" />}
          <span className="flex min-w-0 items-start gap-2 font-mono text-xs uppercase"><MapPin className="h-4 w-4 shrink-0 text-match-accent" /><span>{m.map} <span className="text-muted-foreground">// {m.zone}</span></span></span>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground"><span className="flex items-center gap-2"><CalendarDays className="h-3.5 w-3.5" />{fmtMatchDate(m.date)}</span><span>{fmtMatchTime(m.date)} London</span></div>
      </div>
      {/* 3. Faction */}
      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">{faction && <img src={faction.url} alt={`${m.faction} faction emblem`} className="h-11 w-11 object-contain" />}<div><p className="font-mono text-[10px] uppercase text-muted-foreground">RCNE faction</p><p className="mt-1 flex items-center gap-2 font-heading text-lg uppercase">{m.faction}</p></div></div>
        <Button asChild variant="nav" className="h-auto px-0 text-xs"><a href={m.url} target="_blank" rel="noreferrer">Match centre <ArrowUpRight /></a></Button>
      </div>
      {!m.placement && m.mapStatus && <p className="mt-4 text-xs text-muted-foreground">Scheduled · {m.mapStatus}</p>}
    </div>
  </article>;
}
