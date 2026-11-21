import { Link } from "@tanstack/react-router";
import { useState, type CSSProperties, type ReactNode } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/arachne-logo.png.asset.json";
import hero from "@/assets/hero.jpg";
import { CLAN } from "@/lib/clan-data";
import { LEAGUE } from "@/lib/league-data";
import { getTickerItems } from "@/lib/ticker-data";

const nav = [
  { to: "/", label: "HQ", page: "hq" },
  { to: "/about", label: "About", page: "about" },
  { to: "/clan-structure", label: "Clan Structure", page: "structure" },
  { to: "/roster", label: "Roster", page: "roster" },
  { to: "/matches", label: "Matches", page: "matches" },
  { to: "/events", label: "Events", page: "events" },
  { to: "/hall-of-fame", label: "Hall of Fame", page: "fame" },
  { to: "/join", label: "Enlist", page: "enlist" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-10 px-5 lg:px-8">
        <Button asChild variant="nav" className="h-auto gap-3 p-0 text-foreground">
          <Link to="/" onClick={() => setOpen(false)}><img src={logo.url} alt="Arachne logo" className="h-14 w-14 shrink-0 object-contain" /><span className="flex min-w-0 flex-col items-start gap-1"><span className="font-stencil text-2xl leading-none">ARACHNE</span><span className="max-w-44 whitespace-normal text-left font-mono text-[10px] leading-tight text-foreground/75 sm:max-w-none">WEAVE THE WEB // WAGE THE WAR</span></span></Link>
        </Button>
        <nav aria-label="Main navigation" className="hidden flex-1 items-center justify-center gap-2 xl:flex">
          {nav.map(n => <Button key={n.to} asChild variant="nav" style={{ "--nav": `var(--page-${n.page})` } as CSSProperties} className="nav-page h-20 border-b-2 border-transparent px-2 text-[17px] text-foreground"><Link to={n.to} activeOptions={{ exact: true }} activeProps={{ className: "is-active" }}>{n.label}</Link></Button>)}
        </nav>
        <Button asChild variant="tactical" className="hidden h-10 shrink-0 px-4 text-[16px] xl:inline-flex"><a href="https://discord.gg/rcne" target="_blank" rel="noreferrer">Enter the web <ArrowUpRight /></a></Button>
        <Button variant="ghost" size="icon" className="xl:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav aria-label="Mobile navigation" className="grid border-t border-border px-5 py-4 xl:hidden">{nav.map(n => <Button key={n.to} asChild variant="nav" style={{ "--nav": `var(--page-${n.page})` } as CSSProperties} className="nav-page h-11 justify-start text-[17px] text-foreground"><Link to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }} activeProps={{ className: "is-active border-l-2" }}>{n.label}</Link></Button>)}<Button asChild variant="tactical" className="mt-3"><a href="https://discord.gg/rcne" target="_blank" rel="noreferrer">Enter the web <ArrowUpRight /></a></Button></nav>}
    </header>
  );
}

export function TickerBar() {
  const items = getTickerItems();
  const strip = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((it, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span className="mx-6 text-foreground/40">/</span>
          <span className="ticker-marker mr-2.5 h-1.5 w-1.5 shrink-0" style={{ "--ticker-accent": `var(--page-${it.page})` } as CSSProperties} /><span className="font-semibold">{it.label}</span><span className="mx-2 text-foreground/50">·</span>
          <span>{it.value}</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="ticker relative flex h-9 items-center overflow-hidden border-b border-border bg-crest font-sans text-xs font-medium uppercase text-foreground">
      <div className="ticker-track">{strip(false)}{strip(true)}</div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-crest">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-[1fr_auto] lg:px-8">
        <div className="flex items-center gap-4"><img src={logo.url} alt="Arachne crest" className="h-16 w-16 object-contain" /><div><span className="font-stencil text-2xl">ARACHNE</span><p className="mt-1 font-mono text-xs text-muted-foreground">WEAVE THE WEB // WAGE THE WAR</p></div></div>
        <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-2">{nav.map(n => <Button key={n.to} asChild variant="nav" style={{ "--nav": `var(--page-${n.page})` } as CSSProperties} className="nav-page"><Link to={n.to}>{n.label}</Link></Button>)}</nav>
        <div className="flex flex-wrap justify-between gap-4 border-t border-border pt-6 font-mono text-[11px] text-muted-foreground md:col-span-2"><span>[{CLAN.tag}] // WARDOGS COMPETITIVE UNIT</span><Button asChild variant="nav" className="h-auto p-0 text-[11px]"><a href={LEAGUE.teamUrl} target="_blank" rel="noreferrer">RCNE on WARDOGS League <ArrowUpRight /></a></Button><span>INDEPENDENT CLAN. UNITED BY THE WEB.</span></div>
      </div>
    </footer>
  );
}

export function PageHeader({ kicker, title, sub, children }: { kicker: string; title: string; sub?: string; children?: ReactNode }) {
  return (
    <section className="page-masthead relative overflow-hidden border-b border-border">
      <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover object-center opacity-25" />
      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-8 lg:py-24"><p className="section-index">{kicker}</p><h1 className="page-title mt-5">{title}<span className="text-signal">.</span></h1>{sub && <p className="font-heading mt-5 text-xl uppercase text-foreground sm:text-2xl">{sub}</p>}{children && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/85">{children}</p>}</div>
    </section>
  );
}
