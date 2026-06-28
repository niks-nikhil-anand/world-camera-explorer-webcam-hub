"use client"

import { Container, Section } from "@/components/layout"
import { StatCard } from "@/components/cards"
import { FadeIn } from "@/components/animations"
import { STATS } from "@/constants"

export function StatisticsSection() {
  return (
    <Section className="bg-muted/30">
      <Container size="sm">
        <FadeIn>
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight">
              The World at Your Fingertips
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Our ever-growing network of live webcams
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <StatCard label={stat.label} value={stat.value} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}
