export interface MmrRange {
  min: number;
  max: number;
  rank: string;
}

export const MmrTable: MmrRange[] = [
  { min: 0, max: 799, rank: "Iron" },
  { min: 800, max: 1099, rank: "Bronze" },
  { min: 1100, max: 1399, rank: "Silver" },
  { min: 1400, max: 1699, rank: "Gold" },
  { min: 1700, max: 1999, rank: "Platinum" },
  { min: 2000, max: 2299, rank: "Diamond" },
  { min: 2300, max: 2599, rank: "Ascendant" },
  { min: 2600, max: 2999, rank: "Immortal" },
  { min: 3000, max: 9999, rank: "Radiant" },
];
