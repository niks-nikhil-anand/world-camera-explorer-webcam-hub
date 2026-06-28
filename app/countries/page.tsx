import { Container, PageHeader, Section } from "@/components/layout"
import { CountryCard } from "@/components/cards"
import { mockCountries } from "@/lib/mock-data"

export const metadata = {
  title: "Countries",
  description: "Browse live webcams by country.",
}

export default function CountriesPage() {
  return (
    <Section>
      <Container>
        <PageHeader
          title="Countries"
          description="Browse live cameras from around the world, organized by country."
        />
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mockCountries.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
