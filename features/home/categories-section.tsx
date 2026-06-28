"use client"

import { Container, Section } from "@/components/layout"
import { CategoryCard } from "@/components/cards"
import { FadeIn } from "@/components/animations"
import { CATEGORIES } from "@/constants"

export function CategoriesSection() {
  return (
    <Section className="bg-muted/30">
      <Container>
        <FadeIn>
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight">
              Browse by Category
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Find cameras by type — from beaches to airports, wildlife to weather
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {CATEGORIES.slice(0, 14).map((cat, i) => (
            <FadeIn key={cat.value} delay={i * 0.05}>
              <CategoryCard
                label={cat.label}
                value={cat.value}
                icon={cat.icon}
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}
