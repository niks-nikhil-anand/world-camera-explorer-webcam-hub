import { Container, PageHeader, Section } from "@/components/layout"
import { CameraCard } from "@/components/cards"
import { mockCameras } from "@/lib/mock-data"

export const metadata = {
  title: "Trending Cameras",
  description: "Most popular live webcams right now.",
}

export default function TrendingPage() {
  return (
    <Section>
      <Container>
        <PageHeader
          title="Trending Cameras"
          description="The most viewed live cameras in the last 24 hours."
        />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mockCameras.map((camera) => (
            <CameraCard key={camera.id} camera={camera} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
