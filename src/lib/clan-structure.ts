import type { ClanRank } from "@/lib/clan-data";
import bloodWardenEmblem from "@/assets/BloodWarden.png.asset.json";
import webWeaverEmblem from "@/assets/WebWeaver.png.asset.json";
import warHoundEmblem from "@/assets/WarHound.png.asset.json";
import hatchlingEmblem from "@/assets/Hatchling.png.asset.json";

export type StructureRole = { name: string; summary: string; paragraphs: string[]; emblemRank: ClanRank | null };

/** Artwork for the community roles that sit outside the competitive roster ranks. */
export const structureEmblems: Record<string, string> = {
  "Blood Warden": bloodWardenEmblem.url,
  "Web Weaver": webWeaverEmblem.url,
  WarHound: warHoundEmblem.url,
  Hatchling: hatchlingEmblem.url,
};


export const clanStructure: StructureRole[] = [
  {
    "name": "Triarch",
    "summary": "Clan founders and the overall leadership of ARACHNE.",
    "paragraphs": [
      "The Triarch are responsible for the clan’s direction, structure, continued growth and long-term future, overseeing everything from the wider community and leadership team to competitive operations, leagues, partnerships, events and major clan decisions. They lead by example, support and develop fellow leaders and members, and ensure every area of ARACHNE works together effectively.",
      "Above all, they live and breathe the values of the community, ensuring that as ARACHNE continues to grow and evolve, the culture, values and sense of community at its heart are always protected and upheld."
    ],
    "emblemRank": "Triarch"
  },
  {
    "name": "Pack Commander",
    "summary": "Senior division leaders who embody everything expected of a HellHound, Pack Master, and more.",
    "paragraphs": [
      "Pack Commanders oversee key operational divisions such as Infantry, Armour, Logistics and Building, organising training, developing players and shaping how their division operates.",
      "While primarily focused on WarDogs and Competitive play, they also take wider responsibility for the community, supporting recruitment, moderation and member issues where needed. They lead by example, set the standard and help keep ARACHNE organised, prepared and effective on and off the battlefield."
    ],
    "emblemRank": "Pack Commander"
  },
  {
    "name": "Blood Warden",
    "summary": "ARACHNE's community moderators and guardians of the Clan Code.",
    "paragraphs": [
      "Blood Wardens oversee day-to-day moderation, manage support tickets, handle member issues and step in when problems or disputes arise. They apply our rules fairly and consistently, maintain order across the Discord and ensure ARACHNE remains a friendly, fair, inclusive and organised community, free from toxicity."
    ],
    "emblemRank": null
  },
  {
    "name": "Web Weaver",
    "summary": "ARACHNE's ambassadors, community champions and architects of growth.",
    "paragraphs": [
      "Web Weavers are ARACHNE's brand ambassadors, setting the standard for what our community represents and helping the Web continue to grow. They welcome new members, help them find their feet, connect them with the right people and channels, and ensure those joining share the attitude and values we stand for. They champion ARACHNE both inside and outside the community, helping strengthen our reputation, grow our presence and ensure we grow with the right people, not just more people."
    ],
    "emblemRank": null
  },
  {
    "name": "Pack Master",
    "summary": "Squad leaders who embody everything expected of a HellHound, with the added responsibility of leadership.",
    "paragraphs": [
      "Pack Masters command specialist units such as Assault, Defence and Transport, organising their squad, developing teamwork and communication, supporting training and leading effectively on and off the battlefield. They are expected to set the standard, wear the [RCNE] tag with pride and bring the best out of those under their command."
    ],
    "emblemRank": "Pack Master"
  },
  {
    "name": "HellHound",
    "summary": "Proven competitive ARACHNE players selected for their skill, teamwork, communication, attitude and reliability.",
    "paragraphs": [
      "HellHounds represent the clan in organised competitive play, leagues and tournaments. They wear the [RCNE] tag with pride, uphold our standards on and off the battlefield, and are expected to represent ARACHNE with skill, respect and professionalism wherever they compete."
    ],
    "emblemRank": "Hell Hounds"
  },
  {
    "name": "WarHound",
    "summary": "The backbone of ARACHNE and the heart of our community.",
    "paragraphs": [
      "WarHounds are our established members, from WarDogs regulars and casual gamers to those who simply enjoy being part of the community. They uphold the Clan Code, support those around them, set the standard for our community and proudly carry the [RCNE] name wherever they go."
    ],
    "emblemRank": null
  },
  {
    "name": "Hatchling",
    "summary": "New arrivals taking their first steps into ARACHNE.",
    "paragraphs": [
      "Hatchlings are getting acquainted with the community, reading the Clan Code, meeting fellow members and discovering how and where they want to get involved before earning their place as a WarHound."
    ],
    "emblemRank": null
  }
];
