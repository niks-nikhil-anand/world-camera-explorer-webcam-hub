import { Container, PageHeader, Section } from "@/components/layout"

export const metadata = {
  title: "World Map",
  description: "Explore live webcams on an interactive world map.",
}

export default function MapPage() {
  return (
    <Section>
      <Container>
        <PageHeader
          title="Interactive World Map"
          description="Explore thousands of live cameras placed on an interactive map. Click markers to view streams."
        />
        <div className="mt-8 flex h-[60vh] items-center justify-center rounded-xl border border-dashed border-border bg-muted/30">
          <p className="text-muted-foreground">Map integration coming soon</p>
        </div>
      </Container>
    </Section>
  )
}
