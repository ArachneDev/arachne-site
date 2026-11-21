import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FRIENDLIES_TABLE, LEAGUE, SEASON_ONE, SEEDING_TOURNAMENT } from "@/lib/league-data";
import { ordinal } from "@/lib/clan-data";
import logo from "@/assets/arachne-logo.png.asset.json";

type Record = { name: string; status: string; position: string; points: number; played: number; pending: boolean };

function Stats({ record }: { record: Record }) {
  return <dl className="my-7 grid grid-cols-3 gap-4">
    {([["Position", record.position], ["Points", record.points], ["Played", record.played]] as const).map(([label, value]) => <div key={label}><dt className="font-mono text-[11px] uppercase text-muted-foreground">{label}</dt><dd className={`mt-2 font-stencil text-3xl uppercase sm:text-4xl ${record.pending ? "text-muted-foreground" : "text-foreground"}`}>{value}</dd></div>)}
  </dl>;
}

function RecordHead({ record }: { record: Record }) {
  return <div className="flex items-start gap-4">
    <div className="min-w-0"><h3 className="text-2xl sm:text-3xl">{record.name}</h3><p className={`mt-2 font-mono text-xs uppercase ${record.pending ? "text-muted-foreground" : "text-match-accent"}`}>{record.status}</p></div>
  </div>;
}

function ClanBadge() {
  return <div className="flex items-center gap-4 border border-border border-l-2 border-l-match-accent bg-secondary/60 px-4 py-4">
    <img src={logo.url} alt="Arachne clan emblem" className="h-16 w-16 shrink-0 object-contain" />
    <div className="min-w-0">
      <p className="font-stencil text-2xl uppercase leading-none sm:text-3xl">ARACHNE</p>
      <p className="mt-2 font-mono text-[11px] uppercase text-muted-foreground">[ RCNE ] // WARDOGS League</p>
    </div>
  </div>;
}

function FriendliesTable() {
  return <div className="max-h-[420px] overflow-auto border border-border bg-background/60" tabIndex={0} aria-label="Friendlies league table">
    <table className="w-full min-w-[520px] text-sm">
      <thead className="sticky top-0 z-10 bg-secondary font-mono text-[11px] uppercase text-muted-foreground">
        <tr>{["#", "Team", "P", "1st", "2nd", "3rd", "Pts"].map(h => <th key={h} scope="col" className={`px-3 py-2.5 ${h === "Team" ? "text-left" : "text-center"}`}>{h}</th>)}</tr>
      </thead>
      <tbody>
        {FRIENDLIES_TABLE.map((r, i) => {
          const us = r.tag === "RCNE";
          return <tr key={r.tag} className={`border-t border-border ${us ? "bg-match-accent/15 text-foreground" : "text-muted-foreground"}`}>
            <td className={`px-3 py-2 text-center font-mono ${us ? "text-match-accent" : ""}`}>{i + 1}</td>
            <td className="px-3 py-2"><span className={`mr-2 font-mono text-xs ${us ? "text-match-accent" : "text-foreground"}`}>{r.tag}</span><span className={us ? "font-semibold" : ""}>{r.name}</span></td>
            <td className="px-3 py-2 text-center font-mono">{r.played}</td>
            <td className="px-3 py-2 text-center font-mono text-medal-gold">{r.first}</td>
            <td className="px-3 py-2 text-center font-mono text-medal-silver">{r.second}</td>
            <td className="px-3 py-2 text-center font-mono text-medal-bronze">{r.third}</td>
            <td className="px-3 py-2 text-center font-stencil text-base text-foreground">{r.points}</td>
          </tr>;
        })}
      </tbody>
    </table>
  </div>;
}

export function LeagueRecord({ includeSeason = false, includeTable = false, logoUrl }: { includeSeason?: boolean; includeTable?: boolean; logoUrl?: string }) {
  const friendlies: Record = { name: "Friendlies", status: "Verified friendly record", position: ordinal(LEAGUE.position), points: LEAGUE.points, played: LEAGUE.played, pending: false };
  const upcoming: Record[] = [SEEDING_TOURNAMENT, SEASON_ONE].map(c => ({ name: c.name, status: c.status, position: "—", points: c.points, played: c.played, pending: true }));
  const card = "competition-record min-w-0 rounded-sm border border-border border-t-2 bg-card p-5 sm:p-7";
  return <section aria-label="WARDOGS League records" className="border-y border-border py-7">
    <div className="flex flex-wrap items-center justify-between gap-6">
      <div className="flex items-center gap-5">
        {logoUrl && <img src={logoUrl} alt="WARDOGS League" className="h-24 w-24 shrink-0 object-contain sm:h-28 sm:w-28" />}
        <div><p className="section-index">The WARDOGS League // RCNE</p><h2 className="mt-3 text-2xl sm:text-3xl">The league table</h2></div>
      </div>
      <Button asChild variant="tacticalOutline"><a href={LEAGUE.teamUrl} target="_blank" rel="noreferrer">RCNE league profile <ArrowUpRight /></a></Button>
    </div>
    <div className="mt-7 space-y-8">
      <article aria-label="Friendlies record" className={`${card} border-t-match-accent`}>
        <div className={includeTable ? "grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]" : ""}>
          <div className="min-w-0">
            <RecordHead record={friendlies} />
            <Stats record={friendlies} />
            <ClanBadge />
          </div>
          {includeTable && <div className="min-w-0"><p className="mb-3 font-mono text-[11px] uppercase text-muted-foreground">Full table // {FRIENDLIES_TABLE.length} teams // scroll to see all</p><FriendliesTable /></div>}
        </div>
      </article>
      {includeSeason && <div className="grid gap-8 lg:grid-cols-2">
        {upcoming.map(record => <article key={record.name} aria-label={`${record.name} record`} className={`${card} border-t-steel`}>
          <RecordHead record={record} />
          <Stats record={record} />
          <div className="border-t border-border pt-5"><p className="text-sm text-muted-foreground">Upcoming. No matches or standings yet.</p></div>
        </article>)}
      </div>}
    </div>
  </section>;
}
