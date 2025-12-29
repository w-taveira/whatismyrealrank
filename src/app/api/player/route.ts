import { NextRequest, NextResponse } from "next/server";
import { getPlayerRank } from "@/src/lib/player/playerServices";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const region = searchParams.get("region");
    const riotId = searchParams.get("riotId");
    const tag = searchParams.get("tag");

    if (!region || !riotId || !tag) {
      return NextResponse.json(
        { error: "Missing required query parameters" },
        { status: 400 }
      );
    }

    const result = await getPlayerRank({ region, riotId, tag });

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
