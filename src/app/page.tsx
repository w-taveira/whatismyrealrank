"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { useRouter } from "next/navigation";
import { Target, TrendingUp, Shield } from "lucide-react";

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [region, setRegion] = useState("");
  const [riotId, setRiotId] = useState("");
  const [tag, setTag] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (region && riotId && tag) {
      router.push(
        `/result?region=${region}&riotId=${encodeURIComponent(
          riotId
        )}&tag=${encodeURIComponent(tag)}`
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      {/* Hero Section */}
      <main className="container mx-auto px-4">
        <div className="flex min-h-screen flex-col items-center justify-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
            <Shield className="h-4 w-4" />
            <span>Accurate rank tracking</span>
          </div>

          <h1 className="mb-6 text-balance bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            Discover your real
            <br />
            <span className="text-primary">Valorant rank</span>
          </h1>

          <p className="mb-10 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            Track your MMR, monitor your progress, and see where you truly stand
            in the competitive ladder
          </p>

          <Button
            onClick={() => setOpen(true)}
            size="lg"
            className="group h-12 px-8 text-base font-semibold shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
          >
            Check Your Stats
            <TrendingUp className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* Feature Cards */}
          <div className="mt-20 grid w-full max-w-4xl gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-card-foreground">
                Real-time MMR
              </h3>
              <p className="text-sm text-muted-foreground">
                Get accurate MMR calculations based on your recent matches
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-card-foreground">
                Track Progress
              </h3>
              <p className="text-sm text-muted-foreground">
                Monitor your rank changes and climbing journey over time
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-card-foreground">
                All Regions
              </h3>
              <p className="text-sm text-muted-foreground">
                Support for NA, EU, LATAM, BR, AP, KR and all other regions
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Enter Your Details</DialogTitle>
            <DialogDescription>
              Provide your Riot ID and region to check your stats
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="region">Region</Label>
              <Select value={region} onValueChange={setRegion}>
                <SelectTrigger id="region">
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="na">North America</SelectItem>
                  <SelectItem value="eu">Europe</SelectItem>
                  <SelectItem value="latam">LATAM</SelectItem>
                  <SelectItem value="br">Brazil</SelectItem>
                  <SelectItem value="ap">Asia Pacific</SelectItem>
                  <SelectItem value="kr">Korea</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="riotId">Riot ID</Label>
              <Input
                id="riotId"
                placeholder="Username"
                value={riotId}
                onChange={(e) => setRiotId(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tag">Tag</Label>
              <Input
                id="tag"
                placeholder="0000"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={!region || !riotId || !tag}
            >
              View My Stats
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
