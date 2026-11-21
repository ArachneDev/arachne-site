import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-shell";
import { roster, RANKS, rankEmblems, type ClanRank } from "@/lib/clan-data";
import { BE, DK, FI, GB, NL, RO } from "country-flag-icons/react/3x2";
import type { ComponentType } from "react";

const FLAGS: Record<string, ComponentType<{ title?: string; className?: string }>> = {
  UK: GB,
  Netherlands: NL,
  Finland: FI,
  Belgium: BE,
  Denmark: DK,
  Romania: RO,
};

export const Route = createFileRoute("/roster")({
  head: () => ({
    meta: [
      { title: "Roster — Arachne WARDOGS Clan" },
      { name: "description", content: "Meet the operators of Arachne: callsigns, roles, clan ranks and nationalities." },
      { property: "og:title", content: "Roster — Arachne" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:description", content: "The operators of Arachne, competitive WARDOGS clan." },
    ],
  }),
  component: Roster,
});

function Emblem({ rank }: { rank: ClanRank }) {
  return (
    <div className="clip-notch flex h-11 w-11 shrink-0 items-center justify-center border border-border bg-crest transition group-hover:border-primary">
      <img src={rankEmblems[rank]} alt="" aria-hidden="true" className="h-9 w-9 object-contain" />
    </div>
  );
}

// Round profile picture, shown only for members whose photo the owner supplied.
function Avatar({ src, name }: { src: string; name: string }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-steel/25 bg-crest transition group-hover:border-primary">
      <img src={src} alt={`${name}'s profile picture`} className="h-full w-full object-cover" />
    </span>
  );
}

function Nationality({ value }: { value: string | null }) {
  const Flag = value ? FLAGS[value] : undefined;
  return (
    <span className="flex shrink-0 items-center border border-steel/25 px-2 py-1.5 font-mono text-xs uppercase tracking-normal text-steel/85">
      {Flag ? <Flag title={value ?? ""} className="h-4 w-6" /> : <span aria-hidden="true">—</span>}
    </span>
  );
}

// Every rank uses the same column widths, so cards never change size between groups.



function Roster() {
  return (
    <>
      <PageHeader kicker="Roster" title="The Hellhounds" sub="One Pack // One Purpose">The Hellhounds are ARACHNE's competitive core — hand-picked for their skill, teamwork, comms, discipline and commitment.</PageHeader>

      <div className="mx-auto max-w-7xl px-4 pt-12 pb-12">
        {RANKS.map((rank) => {
          const members = roster.filter((m) => m.rank === rank);
          if (!members.length) return null;
          const id = `rank-${rank.replace(/\s+/g, "-")}`;
          return (
            <section key={rank} aria-labelledby={id} className="mb-12 last:mb-0">
              <div className="flex items-center gap-3 border-b border-border pb-3">
                <span className="h-px w-6 bg-primary" aria-hidden="true" />
                <h2 id={id} className="text-xl sm:text-2xl">{rank}</h2>
                <span className="font-mono text-xs text-muted-foreground">// {members.length}</span>
              </div>
              <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {members.map((m) => (
                  <article key={m.callsign} className="group flex items-center gap-4 border border-border bg-card px-4 py-3 transition hover:border-primary">
                    <Emblem rank={m.rank} />
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-heading text-lg uppercase tracking-normal">{m.callsign}</h3>
                      <p className="font-mono text-xs uppercase tracking-normal text-muted-foreground">{m.role}</p>
                    </div>
                    <Nationality value={m.nationality} />
                    {m.avatar && <Avatar src={m.avatar} name={m.callsign} />}

                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
