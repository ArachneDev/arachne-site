import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-shell";
import { rankEmblems } from "@/lib/clan-data";
import { individualRecords } from "@/lib/hall-of-fame-data";
import { MediaGallery } from "@/components/media-gallery";

export const Route = createFileRoute("/hall-of-fame")({
  head: () => ({ meta: [
    { title: "Hall of Fame — Arachne WARDOGS Community" },
    { name: "description", content: "ARACHNE's individual WARDOGS records: NEMESIS with 123 kills in a game and FaYeR with a 1253m sniper shot." },
    { property: "og:title", content: "Hall of Fame — ARACHNE" },
    { property: "og:description", content: "Individual achievements and record-breaking moments, plus gameplay videos and screenshots from ARACHNE's players." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HallOfFame,
});

function HallOfFame() {
  const claimed = individualRecords.filter(record => record.holder !== null && record.value !== null);
  const unclaimed = individualRecords.filter(record => record.holder === null);
  return <>
    <PageHeader kicker="Legends of the web" title="Hall of Fame" sub="Standout players // Unforgettable moments">Big plays deserve more than a mention in the group chat. These are ARACHNE's individual records, the players behind them and the marks to chase next.</PageHeader>
    <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
      <p className="section-index">Individual records</p>
      <h2 className="mt-4 text-3xl sm:text-4xl">The record holders</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {claimed.map(record => <article key={record.id} className="clip-notch relative overflow-hidden border border-steel/35 bg-crest p-6 sm:p-8">
          <h3 className="min-h-14 text-2xl sm:text-3xl">{record.title}</h3>
          <div className="mt-6 flex items-end gap-3"><p className="font-stencil text-6xl leading-none sm:text-7xl">{record.value}</p><span className="pb-1 font-mono text-sm uppercase text-steel">{record.unit}</span></div>
          <div className="mt-8 flex items-center gap-4 border-t border-border pt-5"><img src={rankEmblems["Hell Hounds"]} alt="Hell Hounds rank emblem" className="h-16 w-16 object-contain" /><div><p className="font-mono text-[10px] uppercase text-muted-foreground">Record holder</p><p className="mt-1 font-heading text-3xl">{record.holder}</p></div></div>
        </article>)}
      </div>
    </section>
    <section className="border-y border-border bg-crest">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <p className="section-index">The next legends</p><h2 className="mt-4 text-3xl sm:text-4xl">Records to chase</h2>
        <div className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">{unclaimed.map(record => <article key={record.id} className="border-t border-border py-6"><h3 className="text-xl">{record.title}</h3><p className="mt-2 font-mono text-xs uppercase text-muted-foreground">Unclaimed // Awaiting a record</p></article>)}</div>
      </div>
    </section>
    <MediaGallery />
  </>;
}
