export type MediaCategory = "League Matches" | "Screenshots" | "Videos";
export type MediaItem = {
  id: string;
  title: string;
  category: MediaCategory;
  kind: "video" | "image";
  url: string;
  thumbnail?: string;
  creator?: string;
};

// Actual gameplay only. No footage or screenshots have been supplied yet.
export const mediaItems: MediaItem[] = [];
export const featuredVideoId: string | null = null;