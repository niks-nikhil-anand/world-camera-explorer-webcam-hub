"use client"

import { Globe2 } from "lucide-react"
import { Container, Section } from "@/components/layout"
import { CountryCard } from "@/components/cards"
import { FadeIn } from "@/components/animations"
import { mockCountries } from "@/lib/mock-data"

export function PopularCountries() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Globe2 className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold tracking-tight">
                  Popular Countries
                </h2>
              </div>
              <p className="text-sm text-muted-foreground">
                Explore cameras from around the world
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mockCountries.slice(0, 12).map((country, i) => (
            <FadeIn key={country.id} delay={i * 0.05}>
              <CountryCard country={country} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}
