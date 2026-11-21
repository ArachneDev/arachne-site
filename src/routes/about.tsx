import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHeader } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Arachne WARDOGS Community" },
      { name: "description", content: "ARACHNE is a multi-gaming community built around people — years of tournaments in Hell Let Loose, Squad and ARMA, now building a world-class WARDOGS team and helping shape The WARDOGS League." },
      { property: "og:title", content: "About Us — Arachne" },
      { property: "og:description", content: "Personality, teamwork and humour, with zero tolerance for toxicity. Competitive or casual, there's a place for you in the web." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const chapters = [
  {
    kicker: "The web",
    title: "Built around people",
    body: [
      "At its heart, ARACHNE is a multi-gaming community built around people. We value personality, teamwork, humour and treating people properly.",
      "We have zero tolerance for trolls, toxicity or griefers.",
    ],
    games: false,
  },
  {
    kicker: "Our history",
    title: "Years in the fight",
    body: [
      "We've spent years gaming together, building friendships and winning tournaments across a multitude of games such as Hell Let Loose, Squad and ARMA.",
      "Now we're bringing that experience to WARDOGS, building a world-class team of talented, organised players ready to train hard, improve together and compete at the highest level.",
    ],
    games: true,
  },
  {
    kicker: "The league",
    title: "Helping build the scene",
    body: [
      "We're also leading from the front with The WARDOGS League, helping organise and shape the competition from the ground up — including its rules, divisions, servers and future tournaments.",
      "ARACHNE aren't just here to compete in the WARDOGS scene, we're helping build it.",
    ],
    games: false,
  },
  {
    kicker: "Who's welcome",
    title: "Room for everyone",
    body: [
      "Though we love our sweat lords, we're just as excited to welcome friendly, like-minded casual gamers as we are competitive chads.",
      "Whether you're a weekend warrior or someone who has completely forgotten what grass feels like, there's a place for you here.",
    ],
    games: false,
  },
];

const games = ["Hell Let Loose", "Squad", "ARMA", "WARDOGS"];

const offers = [
  "Dedicated & highly skilled WARDOGS team",
  "Experienced players, managers & mentors",
  "Organised competitive, league & tournament play",
  "Active, fun & friendly community",
  "Multi-gaming community with years of history",
  "Teamwork, training & opportunities to get involved",
  "Annual in-person clan meet-ups & events",
];

function About() {
  return <>
    <PageHeader kicker="Who we are" title="About Us" sub="Built around people // United by the web">ARACHNE brings together good people, clear comms and a shared love of the game. We take the fight seriously — and make room for a laugh when the dust settles.</PageHeader>

    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      {chapters.map(chapter => (
        <section key={chapter.title} className="border-b border-border py-10 lg:py-12">
          <div className="grid gap-6 lg:grid-cols-[240px_1fr] lg:gap-12">
            <p className="section-index pt-2">{chapter.kicker}</p>
            <div className="min-w-0 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl">{chapter.title}</h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-foreground/85">
                {chapter.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {chapter.games && <ul className="mt-6 flex flex-wrap gap-2">
                {games.map(game => <li key={game} className="clip-notch border border-steel/30 bg-crest px-3 py-1.5 font-mono text-[11px] uppercase text-foreground">{game}</li>)}
              </ul>}
            </div>
          </div>
        </section>
      ))}
    </div>

    <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
      <p className="section-index">What ARACHNE offers you</p>
      <h2 className="mt-3 text-3xl sm:text-4xl">What you get in the web</h2>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {offers.map(offer => (
          <li key={offer} className="clip-notch flex items-center gap-4 border border-steel/25 bg-crest px-4 py-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-primary/40 text-signal"><Check className="h-4 w-4" /></span>
            <span className="text-base text-foreground">{offer}</span>
          </li>
        ))}
      </ul>
    </section>

    <section className="hazard-stripe mx-auto max-w-7xl px-5 pb-4 lg:px-8">
      <div className="clip-notch border border-steel/30 bg-crest px-6 py-10 text-center sm:px-12 lg:py-14">
        <h2 className="font-stencil text-3xl uppercase sm:text-4xl">Sounds like your kind of community?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/85">Come join our Discord, introduce yourself and get involved.</p>
        <Button asChild variant="tactical" className="mt-8"><a href="https://discord.gg/rcne" target="_blank" rel="noreferrer">Join Discord <ArrowUpRight /></a></Button>
      </div>
    </section>
  </>;
}
