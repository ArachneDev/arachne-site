import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/site-shell";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Enlist — Join Arachne WARDOGS Clan" },
      { name: "description", content: "Think you've got what it takes? Requirements and how to join Arachne." },
      { property: "og:title", content: "Enlist — Arachne" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:description", content: "Requirements and how to join Arachne." },
    ],
  }),
  component: Join,
});

const reqs = [
  ["18+", "Minimum age. Maturity on comms is non-negotiable."],
  ["Mic", "Working microphone and clear callouts."],
  ["Competitive or Casual", "Both play styles welcome."],
  ["Discord", "Active in the clan Discord server."],
];

function Join() {
  return (
    <>
      <PageHeader kicker="Recruitment" title="Enlist" sub="Competitive or Casual // You're welcome here">Bring a mic and your people — the web always has room for one more. Whether you're chasing the next win or unwinding with good company, come get involved.</PageHeader>
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {reqs.map(([k, v]) => (
            <div key={k} className="bg-background p-6">
              <div className="font-stencil text-3xl text-foreground">{k}</div>
              <p className="mt-2 text-sm text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 border-y border-border py-12 text-center">
          <h2 className="text-3xl sm:text-4xl">Join Us</h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">Hop into our channels, read the clan code in “Read Before Entry”, pick your WARHOUND role, and get stuck in.</p>
          <Button asChild variant="tactical" className="mt-6 h-12 px-8"><a href="https://discord.gg/rcne" target="_blank" rel="noreferrer">Enter the web <ArrowUpRight /></a></Button>
        </div>
      </div>
    </>
  );
}
