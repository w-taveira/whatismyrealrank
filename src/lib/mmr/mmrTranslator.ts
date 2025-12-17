import { MmrTable } from "./mmrTable";

export interface MmrResult {
  mmr: number;
  rank: string;
}

export function translateMmrToRank(mmr: number): MmrResult {
  const found = MmrTable.find((index) => mmr >= index.min && mmr <= index.max);

  if (!found) {
    return {
      mmr,
      rank: "Unknown",
    };
  }

  return {
    mmr,
    rank: found.rank,
  };
}
