import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-shell";
import { matches } from "@/lib/clan-data";
import { leagueArtwork } from "@/lib/league-artwork";
import { MatchCard } from "@/components/match-card";
import { LeagueRecord } from "@/components/league-record";

export const Route = createFileRoute("/matches")({
  head: () => ({
    meta: [
      { title: "Matches — Arachne WARDOGS Clan" },
      { name: "description", content: "RCNE's WARDOGS League match log with faction emblems, friendly results and a separate Season 1 record." },
      { property: "og:title", content: "Matches — Arachne" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:description", content: "RCNE fixtures, factions and maps — plus separate Friendlies and WARDOGS League Season 1 records." },
    ],
  }),
  component: Matches,
});

function Matches() {
  const upcoming = matches.filter((m) => !m.placement);
  const results = matches.filter((m) => m.placement);
  return (
    <>
      <PageHeader kicker="Combat Log" title="Matches" sub="Every round // Something to prove">Follow RCNE in the WARDOGS League — the fixtures ahead, the results behind us and the lessons we take into the next fight.</PageHeader>
      <div className="mx-auto max-w-7xl space-y-12 px-4 py-12">
        <LeagueRecord includeSeason includeTable logoUrl={leagueArtwork.url} />
        <section>
          <div className="mb-4 flex items-center gap-3 border-b border-border pb-3">
            <h2 className="text-xl sm:text-2xl">Upcoming</h2>
            <span className="font-mono text-xs text-muted-foreground">// {upcoming.length}</span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">{upcoming.map((m) => <MatchCard key={m.id} match={m} />)}</div>
        </section>
        <section>
          <div className="mb-4 flex items-center gap-3 border-b border-border pb-3">
            <h2 className="text-xl sm:text-2xl">Results</h2>
            <span className="font-mono text-xs text-muted-foreground">// {results.length}</span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">{results.map((m) => <MatchCard key={m.id} match={m} />)}</div>
        </section>
        <p className="border-t border-border pt-5 text-xs text-muted-foreground">League badge &amp; faction emblems: WARDOGS League.</p>
      </div>
    </>
  );
}
