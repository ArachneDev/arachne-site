import league from "@/assets/wdl-badge.svg.asset.json";
import valkyra from "@/assets/valkyra.png.asset.json";
import lonestar from "@/assets/lonestar.png.asset.json";
import manticore from "@/assets/manticore.png.asset.json";

// Original league artwork, checked 23 Oct 2026.
export const leagueArtwork = { url: league.url, source: "https://wardogsleague.net/brand/wdl-badge.svg" };
export const factionArtwork: Record<string, { url: string; source: string }> = {
  Valkyra: { url: valkyra.url, source: "https://wardogsleague.net/factions/valkyra.png" },
  Lonestar: { url: lonestar.url, source: "https://wardogsleague.net/factions/lonestar.png" },
  Manticore: { url: manticore.url, source: "https://wardogsleague.net/factions/manticore.png" },
};
import mapZestafona from "@/assets/map-zestafona.png.asset.json";
import mapOzeti from "@/assets/map-ozeti.png.asset.json";
import mapBakurani from "@/assets/map-bakurani.png.asset.json";

// Owner-supplied WARDOGS loading-screen screenshots, 23 Oct 2026.
export const mapArtwork: Record<string, { url: string; source: string }> = {
  Zestafona: { url: mapZestafona.url, source: "Owner-supplied screenshot" },
  Ozeti: { url: mapOzeti.url, source: "Owner-supplied screenshot" },
  Bakurani: { url: mapBakurani.url, source: "Owner-supplied screenshot" },
};