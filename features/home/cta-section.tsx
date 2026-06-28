"use client"

import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Container, Section } from "@/components/layout"
import { FadeIn } from "@/components/animations"

export function CTASection() {
  const router = useRouter()

  return (
    <Section>
      <Container size="sm">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-card to-accent/5 p-8 text-center md:p-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Ready to Explore?
              </h2>
              <p className="mx-auto max-w-md text-muted-foreground">
                Dive into our interactive world map and discover live cameras from
                every continent.
              </p>
              <Button
                size="lg"
                onClick={() => router.push("/map")}
                className="mt-4"
              >
                Open World Map
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
