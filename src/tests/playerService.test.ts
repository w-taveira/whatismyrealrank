import "dotenv/config";

import { getPlayerRank } from "../lib/player/playerServices";

async function testPlayerService() {
  const result = await getPlayerRank({
    region: "br",
    riotId: "cherie",
    tag: "000",
  });

  console.log(result);
}

testPlayerService().catch(console.error);
