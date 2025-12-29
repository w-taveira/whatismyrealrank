"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { Suspense, useEffect, useState } from "react";
import { ArrowLeft, TrendingUp, Award, Activity } from "lucide-react";

type PlayerResult = {
  mmr: number;
  rank: string;
};

export default function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const region = searchParams.get("region") || "BR";
  const riotId = searchParams.get("riotId");
  const tag = searchParams.get("tag");

  const [data, setData] = useState<PlayerResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!region || !riotId || !tag) return;

    async function fetchData() {
      try {
        const res = await fetch(
          `/api/player?region=${region}&riotId=${riotId}&tag=${tag}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch player data");
        }

        const json = await res.json();
        setData(json);
      } catch (err) {
        setError("Could not load player data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [region, riotId, tag]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex min-h-screen items-center justify-center text-red-500">
        {error ?? "Unknown error"}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <Button
          variant="ghost"
          onClick={() => router.push("/")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="mx-auto max-w-3xl space-y-8">
          {/* Player Header */}
          <div className="text-center">
            <h1 className="mb-2 text-4xl font-bold">
              {riotId}
              <span className="text-muted-foreground">#{tag}</span>
            </h1>
            <p className="text-sm uppercase tracking-wide text-muted-foreground">
              {region.toUpperCase()} Region
            </p>
          </div>

          {/* Main Stats */}
          <Card className="p-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Activity className="h-4 w-4" />
                  Current MMR
                </div>
                <div className="text-5xl font-bold text-primary">
                  {data.mmr}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="h-4 w-4" />
                  Rank
                </div>
                <div className="text-5xl font-bold">{data.rank}</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
