"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { Container, PageHeader, Section } from "@/components/layout"
import { CameraCard } from "@/components/cards"
import { SearchBar } from "@/components/search"
import { mockCameras } from "@/lib/mock-data"

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  const results = query
    ? mockCameras.filter(
        (c) =>
          c.name.toLowerCase().includes(query.toLowerCase()) ||
          c.country.toLowerCase().includes(query.toLowerCase()) ||
          c.city.toLowerCase().includes(query.toLowerCase()) ||
          c.category.toLowerCase().includes(query.toLowerCase())
      )
    : mockCameras

  return (
    <>
      <PageHeader
        title="Search Results"
        description={
          query
            ? `Showing results for "${query}"`
            : "Search for cameras by name, location, or category"
        }
      />
      <div className="mt-6 max-w-xl">
        <SearchBar value={query} placeholder="Refine your search..." />
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {results.map((camera) => (
          <CameraCard key={camera.id} camera={camera} />
        ))}
      </div>
      {results.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-muted-foreground">
            No cameras found for &ldquo;{query}&rdquo;
          </p>
        </div>
      )}
    </>
  )
}

export default function SearchPage() {
  return (
    <Section>
      <Container>
        <Suspense fallback={<div className="py-16 text-center text-muted-foreground">Loading...</div>}>
          <SearchContent />
        </Suspense>
      </Container>
    </Section>
  )
}
