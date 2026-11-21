import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Film, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeagueRecord } from "@/components/league-record";
import { LEAGUE, fmtMatchDate, fmtMatchTime, matchOpponents } from "@/lib/league-data";
import hero from "@/assets/hero.jpg";
import logo from "@/assets/arachne-logo.png.asset.json";
import { matches, roster, CLAN, ordinal } from "@/lib/clan-data";
import { individualRecords } from "@/lib/hall-of-fame-data";
import { featuredVideoId, mediaItems } from "@/lib/media-data";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Arachne — Competitive WARDOGS Clan" },
    { name: "description", content: "Arachne HQ: individual records, gameplay media, league matches and how to join our WARDOGS clan." },
    { property: "og:title", content: "Arachne — Competitive WARDOGS Clan" },
    { property: "og:description", content: "Enter the web. Records, footage, fixtures and how to join Arachne." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Index,
});

function Index() {
  const played = matches.filter(m => m.placement);
  const next = matches.find(m => !m.placement);
  const records = individualRecords.filter(record => record.holder !== null && record.value !== null);
  const featured = mediaItems.find(item => item.id === featuredVideoId && item.kind === "video");
  const stats = [
    { k: "Active Hellhounds", v: String(roster.length).padStart(2, "0"), sub: "One pack. One purpose." },
    { k: "Active members", v: String(CLAN.members), sub: "The web keeps growing." },
    { k: "Matches played", v: String(played.length).padStart(2, "0"), sub: "Every round counts." },
    { k: "League position", v: ordinal(LEAGUE.position), sub: `WDL friendlies · ${LEAGUE.points} points.` },
  ];
  return <>
    <section className="hq-hero relative isolate overflow-hidden border-b border-border">
      <img src={hero} alt="A squad advances through a ruined industrial battlefield" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
      <div className="hero-content relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-5 pb-16 text-center">
        <img src={logo.url} alt="Arachne clan emblem" className="mb-4 h-44 w-44 object-contain sm:mb-5 sm:h-60 sm:w-60 lg:h-72 lg:w-72" />
        <h1 className="page-title mt-1">ARACHNE</h1>
        <p className="mt-4 max-w-full font-heading text-xl uppercase text-signal sm:text-2xl">WEAVE THE WEB // WAGE THE WAR</p>
        <p className="mt-4 max-w-md text-base text-foreground/80 sm:text-lg">Disciplined Comms. Inclusive Community.<br />Ruthless on the objective. Ridiculous in the voice chat.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3"><Button asChild variant="tactical" className="h-12 px-7"><a href="https://discord.gg/rcne" target="_blank" rel="noreferrer">Enter the web <ArrowUpRight /></a></Button><Button asChild variant="tacticalOutline" className="h-12 px-7"><Link to="/roster"><Users /> Meet the roster</Link></Button></div>
      </div>
    </section>
    <section aria-label="Clan statistics" className="border-b border-border"><div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">{stats.map((s, i) => <div key={s.k} className={`border-border px-6 py-8 lg:px-8 ${i < 3 ? "md:border-r" : ""} ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""}`}><p className="font-mono text-[11px] uppercase text-foreground/70">{s.k}</p><p className="mt-3 font-stencil text-4xl uppercase sm:text-5xl">{s.v}</p><p className="mt-2 text-xs text-foreground/85">{s.sub}</p></div>)}</div></section>
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8">
      <section aria-labelledby="hq-records"><p className="section-index">02 / Hall of Fame</p><h2 id="hq-records" className="mt-4 text-3xl sm:text-4xl">Hall of Fame</h2><p className="mt-4 text-muted-foreground">The players and performances that set the mark for the pack.</p><div className="mt-6">{records.map(record => <article key={record.id} className="flex flex-wrap items-center justify-between gap-4 border-t border-border py-5"><div><p className="font-mono text-[11px] uppercase text-muted-foreground">{record.title}</p><h3 className="mt-2 text-2xl">{record.holder}</h3></div><p className="font-stencil text-3xl">{record.value?.toLocaleString("en-GB")} <span className="font-mono text-xs text-muted-foreground">{record.unit}</span></p></article>)}</div><Button asChild variant="nav" className="mt-3 px-0"><Link to="/hall-of-fame">Hall of Fame <ArrowRight /></Link></Button></section>
      <section aria-labelledby="hq-media"><p className="section-index">03 / Media</p><h2 id="hq-media" className="mt-4 text-3xl sm:text-4xl">Video of the Week</h2><p className="mt-4 text-muted-foreground">Gameplay videos, screenshots and league matches — the teamwork and the mayhem.</p><div className="mt-6 aspect-video overflow-hidden border border-border bg-crest">{featured ? <video src={featured.url} poster={featured.thumbnail} controls preload="metadata" className="h-full w-full object-contain" aria-label={featured.title} /> : <div className="flex h-full flex-col items-center justify-center gap-3 px-5 text-center"><Film className="h-9 w-9 text-steel" /><h3 className="text-2xl">The spotlight is waiting</h3><p className="text-sm text-muted-foreground">No video selected yet.</p></div>}</div>{featured && <h3 className="mt-3 text-xl">{featured.title}</h3>}<Button asChild variant="nav" className="mt-3 px-0"><Link to="/hall-of-fame">All media <ArrowRight /></Link></Button></section>
    </div>
    <section className="border-t border-border"><div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="section-index">04 / Matches</p><h2 className="mt-4 text-3xl sm:text-4xl">On the front line</h2></div><Button asChild variant="nav"><Link to="/matches">All matches <ArrowRight /></Link></Button></div>
      <div className="mt-7"><LeagueRecord includeTable /></div>
      {next && <div className="mt-7 grid items-center gap-6 border-y border-border py-7 lg:grid-cols-[1fr_1.2fr_auto]"><div><p className="font-mono text-xs text-muted-foreground">NEXT ENGAGEMENT // {fmtMatchDate(next.date)} · {fmtMatchTime(next.date)} London</p><p className="mt-3 font-heading text-sm uppercase text-muted-foreground">WDL Friendly #{next.id} · {next.map} / {next.zone}</p></div><div className="flex flex-wrap items-center justify-center gap-3"><img src={logo.url} alt="" className="h-16 w-16 object-contain" /><span className="font-heading text-2xl">ARACHNE</span><span className="font-mono text-xs text-muted-foreground">/</span><span className="font-heading text-2xl uppercase">{matchOpponents(next)}</span></div><div className="lg:text-right"><Button asChild variant="tacticalOutline"><a href={next.url} target="_blank" rel="noreferrer">Match centre <ArrowUpRight /></a></Button></div></div>}
      <div className="mt-4 grid gap-3 md:grid-cols-3">{played.slice(0, 3).map(m => <article key={m.id} className="border border-border bg-card px-5 py-5"><div className="flex justify-between font-mono text-[10px] uppercase text-muted-foreground"><span>{fmtMatchDate(m.date)}</span><span className={m.placement === 1 ? "text-win" : "text-foreground"}>{m.placement ? `${ordinal(m.placement)} place` : "Scheduled"}</span></div><div className="mt-4 flex flex-wrap items-center justify-between gap-3"><h3 className="text-lg">RCNE <span className="text-muted-foreground">/</span> {matchOpponents(m)}</h3><span className="shrink-0 font-heading text-2xl">+{m.points} pt</span></div><p className="mt-2 text-xs text-muted-foreground">WDL Friendly #{m.id} · {m.map} / {m.zone}</p><Button asChild variant="nav" className="mt-3 h-auto px-0 text-xs"><a href={m.url} target="_blank" rel="noreferrer">Match centre <ArrowUpRight /></a></Button></article>)}</div>
    </div></section>
    <section className="border-y border-border bg-secondary"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 py-12 sm:flex-row sm:items-center lg:px-8"><div><p className="section-index">Recruitment open</p><h2 className="mt-4 text-3xl sm:text-4xl">There's a place in the web.</h2><p className="mt-4 max-w-xl text-muted-foreground">18+ with a working mic. Competitive or casual, you're welcome here. Read the Clan Code, pick your WARHOUND role and get involved.</p></div><Button asChild variant="tactical" className="h-12 shrink-0 px-7"><Link to="/join">Enlist with Arachne <ArrowRight /></Link></Button></div></section>
  </>;
}
