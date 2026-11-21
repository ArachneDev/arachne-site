import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/events")({
  head: () => ({ meta: [
    { title: "Events — Arachne WARDOGS Community" },
    { name: "description", content: "Upcoming ARACHNE events: league fixtures, community nights and clan meet-ups." },
    { property: "og:title", content: "Events — ARACHNE" },
    { property: "og:description", content: "What's coming up for the ARACHNE pack." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Events,
});

function Events() {
  return <>
    <PageHeader kicker="Mark the calendar" title="Events" sub="Fixtures // Community nights // Meet-ups">Everything the pack has coming up — league fixtures, community nights and the moments worth clearing your schedule for.</PageHeader>
    <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
      <p className="section-index">Coming up</p>
      <h2 className="mt-4 text-3xl sm:text-4xl">Upcoming events</h2>
      <div className="mt-8 grid gap-4">
        <article className="flex flex-wrap items-center justify-between gap-4 border border-border bg-crest px-6 py-6">
          <div><p className="font-mono text-xs uppercase text-muted-foreground">Clan event // Fridays</p><h3 className="mt-2 text-2xl sm:text-3xl">ARACHNE - Friday Frontlines Event</h3></div>
          <Button variant="tacticalOutline" disabled>Link coming soon</Button>
        </article>
      </div>
    </section>
  </>;
}
