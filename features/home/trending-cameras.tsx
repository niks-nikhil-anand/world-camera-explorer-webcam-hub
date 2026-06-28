"use client"

import { TrendingUp } from "lucide-react"
import { Container, Section } from "@/components/layout"
import { CameraCard } from "@/components/cards"
import { FadeIn } from "@/components/animations"
import { mockCameras } from "@/lib/mock-data"

export function TrendingCameras() {
  const trending = mockCameras.slice(0, 4)

  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold tracking-tight">Trending Now</h2>
              </div>
              <p className="text-sm text-muted-foreground">
                Most viewed cameras in the last 24 hours
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trending.map((camera, i) => (
            <FadeIn key={camera.id} delay={i * 0.1}>
              <CameraCard camera={camera} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}
