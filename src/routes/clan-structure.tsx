import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-shell";
import { clanStructure, structureEmblems } from "@/lib/clan-structure";
import { rankEmblems } from "@/lib/clan-data";

export const Route = createFileRoute("/clan-structure")({
  head: () => ({
    meta: [
      { title: "Clan Structure — Arachne WARDOGS Community" },
      { name: "description", content: "The roles that shape Arachne, from the Triarch and division leaders to community guardians, competitive players and new arrivals." },
      { property: "og:title", content: "Clan Structure — Arachne" },
      { property: "og:description", content: "Meet the eight roles behind Arachne's leadership, competitive operations and community." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClanStructure,
});

function ClanStructure() {
  return <>
    <PageHeader kicker="The roles behind the web" title="Clan Structure" sub="Different roles // One community">From the people steering the clan to those finding their feet, every role helps hold the web together. Leadership, teamwork and looking out for each other keep ARACHNE moving.</PageHeader>
    <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
      {clanStructure.map((role, index) => {
        const emblem = role.emblemRank ? rankEmblems[role.emblemRank] : structureEmblems[role.name];
        return <section key={role.name} aria-labelledby={`role-${index}`} className="grid gap-6 border-b border-border py-8 sm:grid-cols-[160px_1fr] lg:grid-cols-[240px_1fr] lg:gap-12 lg:py-10">
          <div className="flex items-center gap-5 sm:flex-col sm:items-center sm:justify-start">
            <div className="clip-notch h-28 w-28 shrink-0 border border-steel/30 bg-crest p-1.5 sm:h-36 sm:w-36 lg:h-44 lg:w-44"><div className="flex h-full w-full items-center justify-center border border-primary/30 p-1.5 sm:p-2">{emblem && <img src={emblem} alt={`${role.name} emblem`} className="h-full w-full object-contain" />}</div></div>
          </div>
          <div className="min-w-0 max-w-3xl"><p className="section-index">{index < 2 ? "Leadership" : index < 4 ? "Community" : index < 6 ? "Competitive" : "Membership"}</p><h2 id={`role-${index}`} className="mt-3 text-3xl sm:text-4xl">{role.name}</h2><p className="mt-5 text-lg text-foreground">{role.summary}</p><div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">{role.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></div>
        </section>;
      })}
    </div>
  </>;
}
