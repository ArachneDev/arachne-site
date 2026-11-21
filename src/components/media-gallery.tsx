import { useState } from "react";
import { Expand, Images, Film, Trophy, Video, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { mediaItems, featuredVideoId, type MediaItem, type MediaCategory } from "@/lib/media-data";

const categories = ["All", "Videos", "Screenshots", "League Matches"] as const;
const categoryIcons = { "League Matches": Trophy, Screenshots: Images, Videos: Video };

export function MediaGallery() {
  const [category, setCategory] = useState<"All" | MediaCategory>("All");
  const [selected, setSelected] = useState<MediaItem | null>(null);
  const items = mediaItems.filter(item => category === "All" || item.category === category);
  const featured = mediaItems.find(item => item.id === featuredVideoId && item.kind === "video");
  const EmptyIcon = category === "All" ? Film : categoryIcons[category];
  return <>
    <section className="mx-auto max-w-7xl px-5 pt-12 lg:px-8 lg:pt-16">
      <p className="section-index">In the spotlight</p>
      <h2 className="mt-4 text-3xl sm:text-4xl">Video of the Week</h2>
      <div className="mt-7 aspect-video max-h-[560px] overflow-hidden border border-border bg-crest">
        {featured ? <video key={featured.url} src={featured.url} poster={featured.thumbnail} controls preload="metadata" className="h-full w-full object-contain" aria-label={featured.title} /> : <div className="flex h-full min-h-40 flex-col items-center justify-center gap-4 px-5 text-center"><Film className="h-10 w-10 text-steel sm:h-14 sm:w-14" /><p className="font-heading text-xl uppercase sm:text-3xl">The spotlight is waiting</p><p className="max-w-md text-sm text-muted-foreground sm:text-base">No video selected yet.</p></div>}
      </div>
      {featured && <div className="mt-4"><h3 className="text-2xl">{featured.title}</h3>{featured.creator && <p className="mt-1 text-muted-foreground">{featured.creator}</p>}</div>}
    </section>
    <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
      <p className="section-index">Captured by the community</p>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-6 border-b border-border pb-6">
        <h2 className="text-3xl sm:text-4xl">From the battlefield</h2>
        <div className="flex flex-wrap gap-1" role="group" aria-label="Media category">{categories.map(item => <Button key={item} variant={category === item ? "secondary" : "nav"} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</Button>)}</div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {items.map(item => <article key={item.id} className="min-w-0 border border-border bg-crest">
          <Button variant="ghost" className="group relative block aspect-video h-auto w-full overflow-hidden rounded-none p-0 hover:bg-secondary" aria-label={`View ${item.title}`} onClick={() => setSelected(item)}>
            {item.kind === "image" || item.thumbnail ? <img src={item.thumbnail ?? item.url} alt={item.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-200 motion-safe:group-hover:scale-105" /> : <Film className="mx-auto h-10 w-10 text-steel" />}
            {item.kind === "video" ? <Play className="absolute bottom-3 right-3 h-5 w-5 text-steel" /> : <Expand className="absolute bottom-3 right-3 h-4 w-4 text-steel" />}
          </Button>
          <div className="border-t border-border px-4 py-4"><p className="font-mono text-[10px] uppercase text-muted-foreground">{item.category}</p><h3 className="mt-1 break-words text-lg sm:text-xl">{item.title}</h3></div>
        </article>)}
      </div>
      {items.length === 0 && <div role="status" className="flex min-h-56 flex-col items-center justify-center gap-4 border-b border-border py-10 text-center"><EmptyIcon className="h-9 w-9 text-steel" /><h3 className="text-2xl">{category === "All" ? "No media yet" : `No ${category.toLowerCase()} yet`}</h3><p className="text-muted-foreground">{category === "Screenshots" ? "Your battlefield snapshots belong here." : category === "League Matches" ? "Match recordings and league highlights belong here." : "Your highlights and unforgettable moments belong here."}</p></div>}
    </section>
    <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}>
      <DialogContent className="max-h-[90svh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto">
        <DialogTitle>{selected?.title}</DialogTitle>
        <DialogDescription>{selected?.category} // ARACHNE</DialogDescription>
        {selected && (selected.kind === "video" ? <video key={selected.url} src={selected.url} poster={selected.thumbnail} controls autoPlay className="max-h-[65svh] w-full" aria-label={selected.title} /> : <img src={selected.url} alt={selected.title} className="mx-auto max-h-[65svh] w-full object-contain" />)}
      </DialogContent>
    </Dialog>
  </>;
}