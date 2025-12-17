import { translateMmrToRank } from "../mmr/mmrTranslator";
import { playerInput, playerMmrResult } from "./types";

export function getPlayerRank(input: playerInput): playerMmrResult {
  const mmr = 1600;
  const response = translateMmrToRank(mmr);
  const rank = response.rank;

  return {
    mmr,
    rank,
  };
}
