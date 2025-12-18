import { translateMmrToRank } from "../mmr/mmrTranslator";
import { playerInput, playerMmrResult } from "./types";

const API_BASE_URL = process.env.HENRIK_API_BASE_URL;
const API_KEY = process.env.HENRIK_API_KEY;

if (!API_BASE_URL) {
  throw new Error("Missing HENRIK_API_BASE_URL env variable");
}

if (!API_KEY) {
  throw new Error("Missing HENRIK_API_KEY env variable");
}

export async function getPlayerRank(
  input: playerInput
): Promise<playerMmrResult> {
  const { region, riotId, tag } = input;
  const url = `${API_BASE_URL}/valorant/v2/mmr/${region}/${riotId}/${tag}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      authorization: `${API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HENRIK API error: ${response.status}`);
  }

  const data = await response.json();

  const mmr = data.data.current_data.elo;
  const rank = translateMmrToRank(mmr).rank;

  return {
    mmr,
    rank,
  };
}
