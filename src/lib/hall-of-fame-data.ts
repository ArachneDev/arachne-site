export type IndividualRecord = {
  id: string;
  title: string;
  holder: string | null;
  value: number | null;
  unit: string;
};

// Owner-supplied achievements. Null entries are suggested, unclaimed categories.
export const individualRecords: IndividualRecord[] = [
  { id: "kills", title: "Most kills in a game", holder: "NEMESIS", value: 123, unit: "kills" },
  { id: "sniper", title: "Longest sniper shot", holder: "FaYeR", value: 1253, unit: "m" },
  { id: "streak", title: "Longest kill streak", holder: null, value: null, unit: "kills" },
  { id: "revives", title: "Most revives in a game", holder: null, value: null, unit: "revives" },
  { id: "assists", title: "Most assists in a game", holder: null, value: null, unit: "assists" },
  { id: "vehicles", title: "Most vehicles destroyed", holder: null, value: null, unit: "vehicles" },
  { id: "objectives", title: "Most objectives captured", holder: null, value: null, unit: "captures" },
];